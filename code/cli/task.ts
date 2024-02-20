/* eslint-disable react-hooks/rules-of-hooks */
import _ from 'lodash'
import * as mesh from '~/code/source'
import { Link } from './type'
import { convert_image_with_image_magick_node_input } from '~/code/source'
import { BuildFormatInputOutputModel, Task } from '~/code/type/index'
import kink from '~/code/tool/shared/kink'
import { logOutput, logStart, setLoggingStyle } from './logging'
import { buildInputMapping, transferInput } from './parse'
import {
  testConvertFontWithFontForge,
  testConvertImageWithImageMagick,
} from '../action/convert/shared'
import { convert } from './internal'
import {
  testConvertDocumentWithCalibre,
  testConvertDocumentWithPandoc,
  testConvertMarkdownWithPuppeteer,
  testConvertTxtWithPuppeteer,
} from '../action/convert/document/shared'
import { closeAllBrowsers } from '../tool/node/browser'

export const CONVERT_KEY: Record<string, Link> = {
  i: { line: ['input', 'file', 'path'] },
  o: { line: ['output', 'file', 'path'], need: false },
  I: { line: ['input', 'format'], need: false },
  O: { line: ['output', 'format'], need: false },
  a: { line: ['output', 'directory', 'path'], need: false },
  b: { line: ['input', 'directory', 'path'], need: false },
  h: { line: ['help'], need: false, like: 'boolean' },
  l: { line: ['log'], need: false, like: 'string' }, // -l json to output json
  // -l color -l plain
}

export const INPUT_KEY: Record<string, Link> = {
  i: { line: ['input', 'file', 'path'] },
  I: { line: ['input', 'format'], need: false },
  b: { line: ['input', 'directory', 'path'], need: false },
  h: { line: ['help'], need: false, like: 'boolean' },
  l: { line: ['log'], need: false, like: 'string' }, // -l json to output json
  // -l color -l plain
}

export const FORMAT_KEY: Record<string, Link> = {
  i: { line: ['input', 'file', 'path'] },
  o: { line: ['output', 'file', 'path'], need: false },
  I: { line: ['input', 'format'], need: false },
  O: { line: ['output', 'format'], need: false },
  h: { line: ['help'], need: false, like: 'boolean' },
  l: { line: ['log'], need: false, like: 'string' }, // -l json to output json
  // -l color -l plain
}

export async function call(task: Task, source) {
  switch (task) {
    case 'convert': {
      const base = BuildFormatInputOutputModel.parse(
        transferInput(source, CONVERT_KEY),
      )
      const logFormat = String(
        'log' in base && base.log ? base.log : 'color',
      )

      setLoggingStyle(logFormat)

      // if (
      //   testConvertDocumentWithLibreOffice(
      //     base.input.format,
      //     base.output.format,
      //   )
      // ) {
      //   const form = convert_document_with_libre_office
      //   if (source.help) {
      //     return showHelpForConvert(form)
      //   }
      //   let spinner

      //   try {
      //     spinner = logStart(`Converting document...`, isColor)
      //     const input = ConvertDocumentWithLibreOfficeModel.parse(
      //       transferInput(source, buildInputMapping(form)),
      //     )
      //     const out = await convertDocumentWithLibreOffice(input)
      //     spinner?.stop()
      //     logOutput(out, isColor)
      //     return
      //   } catch (e) {
      //     spinner?.stop()
      //     throw e
      //   }
      // }

      if (
        testConvertTxtWithPuppeteer(
          base.input.format,
          base.output.format,
        )
      ) {
        const form = mesh.convert_txt_with_puppeteer_node_input
        if (source.help) {
          // return showHelpForConvert(form)
        }
        let spinner

        try {
          spinner = logStart(`Converting document...`)
          const out = await convert(
            transferInput(source, buildInputMapping(mesh, form)),
          )
          spinner?.stop()
          if (typeof out === 'object' && 'output' in out) {
            logOutput(out.file.path)
          }
          return
        } catch (e) {
          spinner?.stop()
          throw e
        } finally {
          await closeAllBrowsers()
        }
      }

      if (
        testConvertMarkdownWithPuppeteer(
          base.input.format,
          base.output.format,
        )
      ) {
        const form = mesh.convert_txt_with_puppeteer_node_input
        if (source.help) {
          // return showHelpForConvert(form)
        }
        let spinner

        try {
          spinner = logStart(`Converting document...`)
          const out = await convert(
            transferInput(source, buildInputMapping(mesh, form)),
          )
          spinner?.stop()
          if (typeof out === 'object' && 'output' in out) {
            logOutput(out.file.path)
          }
          return
        } catch (e) {
          spinner?.stop()
          throw e
        } finally {
          await closeAllBrowsers()
        }
      }

      if (
        testConvertDocumentWithPandoc(
          base.input.format,
          base.output.format,
        )
      ) {
        const form = mesh.convert_document_with_pandoc_node_input
        if (source.help) {
          // return showHelpForConvert(form)
        }
        let spinner

        try {
          spinner = logStart(`Converting document...`)
          const out = await convert(
            transferInput(source, buildInputMapping(mesh, form)),
          )
          spinner?.stop()
          if (typeof out === 'object' && 'output' in out) {
            logOutput(out.file.path)
          }
          return
        } catch (e) {
          spinner?.stop()
          throw e
        }
      }

      if (
        testConvertDocumentWithCalibre(
          base.input.format,
          base.output.format,
        )
      ) {
        const form = mesh.convert_document_with_calibre_node_input
        if (source.help) {
          // return showHelpForConvert(form)
        }

        let spinner

        try {
          spinner = logStart(`Converting document...`)
          const out = await convert(
            transferInput(source, buildInputMapping(mesh, form)),
          )
          spinner?.stop()
          if (typeof out === 'object' && 'output' in out) {
            logOutput(out.file.path)
          }
          return
        } catch (e) {
          spinner?.stop()
          throw e
        }
      }

      if (
        testConvertFontWithFontForge(
          base.input.format,
          base.output.format,
        )
      ) {
        const form = mesh.convert_font_with_font_forge_node_input
        if (source.help) {
          // return showHelpForConvert(form)
        }
        const spinner = logStart(`Converting font...`)
        const out = await convert(
          transferInput(source, buildInputMapping(mesh, form)),
        )
        spinner?.stop()
        if (typeof out === 'object' && 'output' in out) {
          logOutput(out.file.path)
        }
        return
      }

      if (
        testConvertImageWithImageMagick(
          base.input.format,
          base.output.format,
        )
      ) {
        const form = convert_image_with_image_magick_node_input
        if (source.help) {
          return // showHelpForConvert(form)
        }
        let spinner

        try {
          spinner = logStart(`Converting image...`)
          const out = await convert(
            transferInput(source, buildInputMapping(mesh, form)),
          )
          spinner?.stop()
          if (typeof out === 'object' && 'output' in out) {
            logOutput(out.file.path)
          }
          return
        } catch (e) {
          spinner?.stop()
          throw e
        }
      }

      // if (
      //   testConvertVideoWithFfmpeg(base.input.format, base.output.format)
      // ) {
      //   const form = convert_video_with_ffmpeg
      //   if (source.help) {
      //     return showHelpForConvert(form)
      //   }
      //   const spinner = logStart(`Converting video...`, isColor)
      //   try {
      //     const input = ConvertVideoWithFfmpegModel.parse(
      //       transferInput(source, buildInputMapping(form)),
      //     )
      //     const out = await convertVideoWithFfmpeg(input, msg => {
      //       if (spinner) {
      //         spinner.text = renderProgress(
      //           `Converting video... (speed ${msg.link?.speed}x)`,
      //           isColor,
      //         )
      //       }
      //     })
      //     spinner?.stop()
      //     logOutput(out, isColor)
      //   } catch (e) {
      //     spinner?.stop()
      //     throw e
      //   }
      //   return
      // }
      // if (testConvertArchive(base.input.format, base.output.format)) {
      //   return await convertArchive(source)
      // }
      break
    }
    case 'slice': {
      // if (await testSplitPdf('slice', source)) {
      //   return await slicePdf(source)
      // }
      break
    }
    // case 'format': {
    //   switch (source.object[0]) {
    //     case 'rust': {
    //       await formatRust(
    //         FormatRustModel.parse(
    //           _.merge(transferInput(source, FORMAT_KEY), {
    //             input: {
    //               format: 'rust',
    //             },
    //           }),
    //         ),
    //       )
    //       return
    //     }
    //   }
    //   break
    // }
    // case 'compress': {
    //   break
    // }
    // case 'decompress': {
    //   break
    // }
    // case 'verify': {
    //   const base = transferInput(source, INPUT_KEY)
    //   const format = source.object[0]
    //   if (IMAGE_MAGICK_FORMAT.includes(format as ImageMagickFormat)) {
    //     const input = VerifyImageWithImageMagickModel.parse(
    //       _.merge(base, { input: { format } }),
    //     )
    //     if (await verifyImageWithImageMagick(input)) {
    //       logOutput(`Image is a ${format}.`, true, 'note')
    //     } else {
    //       logOutputError(`Image is not ${format}.`)
    //     }
    //     return
    //   }
    // }
    // case 'inspect': {
    //   const thing = source.object[0] as string
    //   if (thing === 'system') {
    //     const info = await inspectSystem()
    //     logTree(info)
    //     return
    //   }
    //   break
    // }
    // case 'compile': {
    //   const base = BuildFormatInputOutputModel.parse(
    //     _.merge(transferInput(source, CONVERT_KEY), {
    //       input: {
    //         format: source.object[0],
    //       },
    //     }),
    //   )
    //   await compileInternal(base)
    //   return
    // }
  }

  throw kink('task_not_implemented', {
    task: task,
  })
}

// function showHelpForConvert(form: Form) {
//   console.log('usage:')
//   console.log('')
//   console.log(`  task convert -i <input-path> -o <output-path>`)
//   console.log('')
//   console.log('options:')
//   console.log('')
//   buildCliOptions(form).forEach(({ link, note }) => {
//     console.log(`  ${link.join(', ')}`)
//     if (note) {
//       console.log(`    ${note}`)
//     }
//   })
//   console.log('')
// }
