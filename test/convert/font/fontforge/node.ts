import { Test } from 'tape'
import task from '~/code/node'
import fs from 'fs'

export default function testConvertFontWithFontForgeNode(
  test: Test['test'],
) {
  test('convert font with fontforge', async t => {
    await task.convert({
      input: {
        format: 'ttf',
        file: { path: '../file/base/font/etch.ttf' },
      },
      output: { format: 'otf', file: { path: 'test/hold/etch.woff' } },
    })
    t.assert(fs.existsSync('test/hold/etch.woff'))
  })
}
