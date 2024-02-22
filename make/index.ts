import make from '@termsurf/form/host/make'
import * as mesh from '~/code/source'
// import '~/code/shared/type/source/call/convert'
import fs from 'fs'
import _ from 'lodash'
import {
  IMAGE_MAGICK_INPUT_FORMAT,
  IMAGE_MAGICK_OUTPUT_FORMAT,
  FONT_FORMAT,
  CALIBRE_INPUT_FORMAT,
  CALIBRE_OUTPUT_FORMAT,
  LIBRE_OFFICE_INPUT_FORMAT,
  LIBRE_OFFICE_OUTPUT_FORMAT,
  PANDOC_INPUT_FORMAT,
  PANDOC_OUTPUT_FORMAT,
  PUPPETEER_INPUT_FORMAT,
  PUPPETEER_OUTPUT_FORMAT,
} from '~/code/type'

const NODE_CACHE: Record<string, boolean> = {}
const BROWSER_CACHE: Record<string, boolean> = {}

make({ test: `./code.js`, mesh }).then(({ tree }) => {
  const cast = [tree.cast].join('\n')
  // fs.writeFileSync(`./code/shared/type/index.ts`, tree.base as string)
  fs.writeFileSync(`./code/type/cast.ts`, cast)
  fs.writeFileSync(`./code/type/take.ts`, tree.take)
  // fs.writeFileSync(`./code/cli/type/link.ts`, tree.line)
})

function generateIoType({
  name,
  input,
  output,
  outputName,
  extend,
}: {
  name: string
  input: ReadonlyArray<string>
  output: ReadonlyArray<string>
  outputName: string
  extend: Array<string>
}) {
  const text: Array<string> = []

  text.push(`export type ${name} = {`)
  input.forEach(i => {
    text.push(`  '${i}': ${outputName}`)
  })
  text.push(`}`)
  text.push(``)

  text.push(`export type ${name}Node = {`)
  input.forEach(i => {
    output.forEach(o => {
      if (NODE_CACHE[`${i}:${o}`]) {
        // console.log(`${name}[${i}:${o}]`)
        return
      }

      NODE_CACHE[`${i}:${o}`] = true

      text.push(
        `  '${i}:${o}': ${extend.map(x => `${x}NodeInput`).join(' | ')}`,
      )
    })
  })
  text.push(`}`)
  text.push('')

  text.push(`export type ${name}Browser = {`)
  input.forEach(i => {
    output.forEach(o => {
      if (BROWSER_CACHE[`${i}:${o}`]) {
        // console.log(`${name}[${i}:${o}]`)
        return
      }

      BROWSER_CACHE[`${i}:${o}`] = true

      text.push(
        `  '${i}:${o}': ${extend.map(x => `${x}BrowserInput`).join(' | ')}`,
      )
    })
  })
  text.push(`}`)
  text.push('')
  return text.join('\n')
}

function generateRestOfCast() {
  const text: Array<string> = []

  text.push(
    generateIoType({
      name: `PuppeteerInputOutput`,
      input: PUPPETEER_INPUT_FORMAT,
      output: PUPPETEER_OUTPUT_FORMAT,
      outputName: 'PuppeteerOutputFormat',
      extend: [
        'ConvertTxtWithPuppeteer',
        'ConvertMarkdownWithPuppeteer',
      ],
    }),
  )

  text.push(
    generateIoType({
      name: `FontForgeInputOutput`,
      input: FONT_FORMAT,
      output: FONT_FORMAT,
      outputName: 'FontFormat',
      extend: ['ConvertFontWithFontForge'],
    }),
  )

  text.push(
    generateIoType({
      name: `ImageMagickInputOutput`,
      input: IMAGE_MAGICK_INPUT_FORMAT,
      output: IMAGE_MAGICK_OUTPUT_FORMAT,
      outputName: 'ImageMagickOutputFormat',
      extend: ['ConvertImageWithImageMagick'],
    }),
  )

  text.push(
    generateIoType({
      name: `CalibreInputOutput`,
      input: CALIBRE_INPUT_FORMAT,
      output: CALIBRE_OUTPUT_FORMAT,
      outputName: 'CalibreOutputFormat',
      extend: ['ConvertDocumentWithCalibre'],
    }),
  )

  text.push(
    generateIoType({
      name: `LibreOfficeInputOutput`,
      input: LIBRE_OFFICE_INPUT_FORMAT,
      output: LIBRE_OFFICE_OUTPUT_FORMAT,
      outputName: 'LibreOfficeInputOutput',
      extend: ['ConvertDocumentWithLibreOffice'],
    }),
  )

  text.push(
    generateIoType({
      name: `PandocInputOutput`,
      input: PANDOC_INPUT_FORMAT,
      output: PANDOC_OUTPUT_FORMAT,
      outputName: 'PandocOutputFormat',
      extend: ['ConvertDocumentWithPandoc'],
    }),
  )

  return text.join('\n')
}
