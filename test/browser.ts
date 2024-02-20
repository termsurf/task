import task from '~/code/browser'
import makeSiteKinkText from '@termsurf/kink-site'
import Kink from '@termsurf/kink'
import { SourceMapConsumer, RawSourceMap } from 'source-map'
import { makeText } from '@termsurf/kink-text'
import { makeLinkList } from '@termsurf/kink-text/make/index.js'
;(SourceMapConsumer as any).initialize({
  'lib/mappings.wasm': '/source',
})

task.configure('remote', 'http://localhost:3000/v2')

test()

window.addEventListener('error', browserErrorHandler)
window.addEventListener('unhandledrejection', browserRejectionHandler)

function browserErrorHandler(event) {
  const error = event ? event.error : undefined
  console.log(makeSiteKinkText(error))
}

function browserRejectionHandler(event) {
  const error = event ? event.reason : undefined
  console.log(makeSiteKinkText(error))
}

const HOST_LINK_MESH: Record<string, SourceMapConsumer> = {}

async function loadHostLink(
  line: string,
): Promise<SourceMapConsumer | void> {
  const link = HOST_LINK_MESH[`${line}`]
  if (link) {
    return link
  }

  const res = await fetch(line)
  const text = await res.text()
  const last = text.trim().split('\n').pop() ?? ''
  console.log(text)
  console.log(last)
  if (
    last.match(
      /(\/\/# sourceMappingURL=data:application\/json;charset=utf-8;base64,)/,
    )
  ) {
    console.log(last.slice(RegExp.$1.length))
    const json = JSON.parse(
      atob(last.slice(RegExp.$1.length)),
    ) as RawSourceMap
    json.sourceRoot = 'http://localhost:3000/'
    json.sources.forEach((source, i) => {
      json.sources[i] = source.replace(/^webpack:\/\//g, '//')
    })
    console.log(json)

    const sm = await new SourceMapConsumer(json, line)
    HOST_LINK_MESH[`${line}`] = sm
    return sm
  }
}

async function readHostLinkFile(
  file: string,
  line: number,
  rise: number,
): Promise<[string, number | undefined, number | undefined]> {
  const link = await loadHostLink(file)

  const trace = {
    column: rise,
    filename: file,
    line: line,
  }

  if (link) {
    const token = link.originalPositionFor(trace)
    if (token.source) {
      return [
        token.source,
        token.line == null ? undefined : token.line,
        token.column == null ? undefined : token.column,
      ]
    } else {
      return [file, line, rise]
    }
  } else {
    return [file, line, rise]
  }
}

export async function makeKinkText(kink: Kink): Promise<string> {
  const stack = makeLinkList(kink.stack?.split('\n') ?? [])
  const list: Array<string> = []

  for (const data of stack.linkList) {
    const [file, line, rise] = await readHostLinkFile(
      data.file,
      data.line ?? 0,
      data.code ?? 0,
    )

    console.log(file, line, rise)
  }

  return makeText({
    host: kink.host,
    code: kink.code,
    note: kink.note,
    list: kink.stack?.split('\n') ?? [],
    link: kink.link,
    // hook: readHostLinkFile,
  })
}
async function test() {
  // const body = new FormData()
  // body.set('file', new Blob(['foo']))
  // await task
  //   .requestAndWaitForWorkToComplete({
  //     path: '/v2/convert/ttf/otf',
  //     method: 'POST',
  //     body: body,
  //   })
  //   .forEach(data => {
  //     console.log(data)
  //   })

  const controller1 = new AbortController()

  try {
    await task
      .convert(
        {
          handle: 'remote',
          input: {
            format: 'ttf',
            file: {
              sha256:
                'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
              content: new Blob(['foo']),
            },
          },
          output: { format: 'otf' },
        },
        {
          signal: controller1.signal,
        },
      )
      .forEach(data => {
        console.log('convert', data)
        if (data.type === 'request-progress') {
          controller1.abort()
        }
      })
  } catch (e) {
    // console.log(await makeKinkText(e as Kink))
  }

  const controller = new AbortController()

  try {
    await task
      .convert(
        {
          handle: 'remote',
          input: {
            format: 'otf',
            file: {
              sha256:
                'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
              content: new Blob(['foo']),
            },
          },
          output: { format: 'ttf' },
        },
        {
          signal: controller.signal,
        },
      )
      .forEach(data => {
        if (data.type === 'request-progress') {
          controller.abort()
        }
      })
  } catch (e) {
    console.log(makeSiteKinkText(e))
  }

  try {
    await task
      .convert({
        handle: 'remote',
        input: {
          format: 'ttf',
          file: {
            sha256:
              'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
            content: new Blob(['foo']),
          },
        },
        output: { format: 'woff2' },
      })
      .forEach(data => {
        console.log('convert', data)
      })
  } catch (e) {
    console.log(makeSiteKinkText(e))
  }

  console.log('after')
}
