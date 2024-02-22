import { Test } from 'tape'
import task from '~/code/browser'
import { PNG_FIRE } from './browser.data'

export default function testConvertImageWithImageMagickBrowser(
  test: Test['test'],
) {
  test('convert png to jpg', async t => {
    const out = await task.convert({
      handle: 'remote',
      input: {
        format: 'png',
        file: {
          sha256:
            '806bf54442a7143145e3b096aa44ec998e73acabf3e023ff9142c37c97c32322',
          content: PNG_FIRE,
        },
      },
      output: { format: 'jpg' },
    })
    t.assert(out.file.content instanceof Blob)
  })
}
