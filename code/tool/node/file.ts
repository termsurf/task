import pathResolver from 'path'
import fsp from 'fs/promises'
import fs from 'fs'
import { Readable } from 'stream'
import { ReadableStream as ReadableStreamWeb } from 'stream/web'
import { tmpName } from 'tmp-promise'
import _ from 'lodash'
import { fetchWithTimeout } from '../shared/request.js'
import { FileLink } from '../shared/file.js'
import { tmpdir } from 'os'
import { getRandomId } from './id.js'

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
  remotePath: string,
  outputPath: string,
  controller?: AbortController,
) {
  return new Promise((res, rej) => {
    fetchWithTimeout(remotePath, { controller }).then(r => {
      if (r.body) {
        return Readable.fromWeb(r.body as ReadableStreamWeb<any>)
          .pipe(
            fs.createWriteStream(outputPath, {
              signal: controller?.signal,
            }),
          )
          .on('error', rej)
          .on('close', () => res(outputPath))
      }
    })
  })
}

export async function saveRemoteFileAndCleanupOnError(
  remotePath: string,
  outputPath: string,
  controller?: AbortController,
) {
  try {
    await saveRemoteFile(remotePath, outputPath, controller)
  } catch (e) {
    if (await fsp.stat(outputPath)) {
      await fsp.unlink(outputPath)
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
            fileLink.path.href,
            tmpPath,
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

export function getScopeDirectory(possibility?: string) {
  return possibility ?? tmpdir()
}

export async function getFallbackFilePath(
  possibility: string | undefined,
  directory: string,
  extension?: string,
) {
  if (possibility) {
    return possibility
  }

  const name = getRandomId(64)
  const fullName = extension ? `${name}.${extension}` : name
  const path = await tmpName({ tmpdir: directory, name: fullName })
  return path
}
