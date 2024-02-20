import task from '~/code/browser'
import makeSiteKinkText from '@termsurf/kink-site'
import Kink from '@termsurf/kink'

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
    console.log(makeSiteKinkText(e))
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
