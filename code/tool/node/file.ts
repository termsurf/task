import pathResolver from 'path'
import fsp from 'fs/promises'
import fs from 'fs'
import { Readable } from 'stream'
import { ReadableStream as ReadableStreamWeb } from 'stream/web'
import { tmpName } from 'tmp-promise'
import _ from 'lodash'
import { fetchWithTimeout } from '../shared/request.js'
import { FileLink } from '../shared/file.js'

export async function createStreamableFile(
  path: string,
): Promise<File> {
  const name = pathResolver.basename(path)
  const handle = await fsp.open(path)
  const { size } = await handle.stat()

  const file = new File([], name)
  file.stream = () => handle.readableWebStream() as ReadableStream

  // Set correct size otherwise, fetch will encounter UND_ERR_REQ_CONTENT_LENGTH_MISMATCH
  Object.defineProperty(file, 'size', { get: () => size })

  return file
}

export async function saveRemoteFile(
  input,
  controller?: AbortController,
) {
  return new Promise((res, rej) => {
    fetchWithTimeout(input.input.path, { controller }).then(r => {
      if (r.body) {
        return Readable.fromWeb(r.body as ReadableStreamWeb<any>)
          .pipe(
            fs.createWriteStream(input.output.file.path, {
              signal: controller?.signal,
            }),
          )
          .on('error', rej)
          .on('close', () => res(input.output.file.path))
      }
    })
  })
}

export async function saveRemoteFileAndCleanupOnError(
  input,
  controller?: AbortController,
) {
  try {
    await saveRemoteFile(input, controller)
  } catch (e) {
    if (await fsp.stat(input.output.file.path)) {
      await fsp.unlink(input.output.file.path)
    }
  }
}

export async function saveAllRemoteFilesLocally(
  files: Array<FileLink>,
) {
  const controller = new AbortController()
  return Promise.all(
    files.map(async fileLink => {
      switch (fileLink.path.type) {
        case 'https-uri':
        case 'http-uri': {
          const tmpPath = await tmpName()
          return saveRemoteFileAndCleanupOnError(
            {
              input: { path: fileLink.path.href },
              output: {
                file: { path: tmpPath },
              },
            },
            controller,
          )
        }
        case 'ftps-uri':
        case 'ftp-uri': {
        }
      }
    }),
  )
}

export async function loadAllFilesForRemoteUpload(
  files: Array<FileLink>,
) {
  const controller = new AbortController()
  const out: any = {}
  files.forEach(async fileLink => {
    const file = await createStreamableFile(fileLink.path.href)
    if (_.has(out, fileLink.link)) {
      const val = _.get(out, fileLink.link)
      const arr = Array.isArray(val) ? val : [val]
      arr.push(file)
      _.set(out, fileLink.link, arr)
    } else {
      _.set(out, fileLink.link, file)
    }
  })
  return out
}
