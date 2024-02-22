import {
  CalibreInputFormat,
  CalibreOutputFormat,
  ConvertDocumentWithCalibreBrowserInput,
  ConvertDocumentWithLibreOfficeBrowserInput,
  ConvertDocumentWithPandocBrowserInput,
  ConvertFontWithFontForgeBrowserInput,
  ConvertImageWithImageMagickBrowserInput,
  ConvertLatexToPngInputFormat,
  ConvertLatexToPngBrowserInput,
  ConvertLatexToPngOutputFormat,
  ConvertMarkdownWithPuppeteerBrowserInput,
  ConvertTxtWithPuppeteerBrowserInput,
  ConvertVideoWithFfmpegBrowserInput,
  ExtractBySubKey,
  FfmpegFormat,
  FontFormat,
  ImageMagickInputFormat,
  ImageMagickOutputFormat,
  LibreOfficeInputFormat,
  LibreOfficeOutputFormat,
  PandocInputFormat,
  PandocOutputFormat,
  PuppeteerOutputFormat,
  Values,
} from '~/code/type'
import {
  convertDocumentWithCalibreBrowser,
  convertDocumentWithLibreOfficeBrowser,
  convertDocumentWithPandocBrowser,
  convertMarkdownWithPuppeteerBrowser,
  convertTxtWithPuppeteerBrowser,
  testConvertDocumentWithCalibreBrowser,
  testConvertDocumentWithLibreOfficeBrowser,
  testConvertDocumentWithPandocBrowser,
  testConvertMarkdownWithPuppeteerBrowser,
  testConvertTxtWithPuppeteerBrowser,
} from './document/browser'
import {
  convertFontWithFontForgeBrowser,
  testConvertFontWithFontForgeBrowser,
} from './font/browser'
import {
  convertImageWithImageMagickBrowser,
  convertImageWithInkscapeBrowser,
  testConvertImageWithImageMagickBrowser,
  testConvertImageWithInkscapeBrowser,
} from './image/browser'
import {
  convertVideoWithFfmpegBrowser,
  testConvertVideoWithFfmpegBrowser,
} from './video/ffmpeg/browser'
import { ConvertExtension } from './shared'
import kink from '~/code/tool/shared/kink'
import Observable from 'zen-observable'
import { WorkFileAsBlob } from '~/code/tool/shared/work'
import { NativeOptions } from '~/code/tool/shared/request'

// www.typescriptlang.org/play?#code/C4TwDgpgBAwg9gOwG4QE7AJYCMA2EBicqAtgIbADOUAvFAN4BQUUYCA5gFxQBEAVmG25QAPjzYYAZkNHdWggNxMo-TjznSxkjXwHdFzcRK6z22lXqXBgRnnGvaA7nAlSRPJy4BMF5nZvcrVxkPIPdnCW99KAokVQD7N24Qx3DvRL9tdUTzJQB6XKgAQQATYqg7AAs0KAwEMABXYCgJIjJKKFIEMuAqjFQoAGMiVAgKMERi2rZyxoamlpJyKiqRgDp1hgBfRQYhhAommAB5ADkANQBRACUAFQBJACEAGQuAfXwjq4BZQpuAZS4hVQqFIIAAPABrCAgZywRAodDYPCERaUAB8NCgAG0lMwAORyPEAGlxUDxKmJpLxhkpzHxgVpdLxfkZ+JibEpAF0OlQ9gcGAxQJA4cg0MAjmBMIgKF9SGBMYxmCZOOYuAAFdhRZUcQzcdWapTa9T6thalQcVVQABSAjNAh1Wi4NtNhvNxuttsNhg47udWu9lr9hsCHAyXEICGAWpDyXDiCjwesHBC3jjka1fg4gT1UAjCaVmdjufjGaTKZzea17OTqQrJcN1ezafzPGrYeL6YbsRrLjrnaV1ctla7nHdw+Y+SgFwAHsAIF0eVAEBAIMVV+tVlsdkLoCi2hKpfsFYaKsBiDgcwAJM84YPgUYDVAYSU5m73iiP5-ALcCndQa-ngq0RTHgACK9R2KMAD8XBYHAcB4J0UCbIK95QG+kAfk+kpARQIEQOBkEUDBUBwQhECdPI0QQMQGBDDg0okWRiEIMhqHCnmQFsDg4AVGqcC1JQJFAiC4IIPUxBYGgaJUds7HQBq0y0HQUDACC+xgKQIyRg8EBDMQ0FcAcT6ashih-s6QGaaUUwkeJkloLJOyTvAoroAeGDSjUVCkFAjQYDgGCgKpaHAHAUDFCACCkLRAykDgPGDCM5DQFCIBUAsIoIuKkqeUeWCkBQq7lKxtRzB0C5wLMjTNK0SzyVlYoedKYJKHcdSNHu5BQBAs7zsUVBpbCrnZUiBB1ZQJLMEc1XAF1TS9XOXRUMZUwMBitAAAYACR0O1czzZsHC7TNwAHRNmybT1fXLVAQ0SI17m5dKspgEoUGPTlh4ynKWI7XtHVzRdx10Kd52opdnJKFwy4ItuaF3BQZzxRgxRg51E1gvtNWLf1g3QsN8JimN80UESUDo8AG0U7N11LQNn0kxNFBYtjwDch9an1NAXASPFRXw8KlMUCNYpgjAdN43dBMPaLiK4ONqJkxT1OI8jgVo7N83i+TRwYrjt1c9AH1y+KtMwxAcO-mhMDxTg4uS7d92MwrpO6+T+COwzzvzc1+wbaSps6xTXtUKbTNK1iMAcyHFsIhiwiktr+BotbQuzRQWOh9LMKy0T8vIszuuzdTip0ns2VcMLQd3MXZ2NKndK1aicaosLWwChI9QIAMh7eerqNy3hiAOwb3syy7hdK7r2fh67zNR5yaIABRlY0XCdCAACUXBr00GBh-nwDB3r9CkpIUDLwAhMveJ73iNSlYDUAAGQv2SVX18AD+1I-cxb1vKAIxgD1FQKxPmOABakj5E0FSCw2i70BvNZCmI96rD3lEZgMD6DNwQTML+yDNioMBqsT+cxMFQEnDcCoB9BhVAGBCKgF8ejQDITVeB3VaG+SQCjMoFc0DD1YsALSbAIDzCIKpKof92ETU3E3ScJxIJcGobQg4AUcARTgKMBAeImhkChFATacUEpXWAaA1im1YZoCut1fSYAArQEwAZUihViqIAilFGKdEoA8JwNzCgci6RmLAbAU4lxbiPBeO8T4Px-joJ7n4tcFBV5IImoAt+zR+YQHyMcc41x7jPDeB8b4vw-jxIGIk0Yy82FA1RFvDuDAu49z7sY+2Esx741zpPRWbRlbHA9tnH2E0-YUEbnSFJcwuBBxgOTY4s8j4R16YvKAJsjhQDjtJV+ODSC9zylwPE-D0AP02DvKApIm7VyPsHY4CclyW0co07uuz3GtNaswdpN1x5dLnlPXpU1Qn-M9h0nOsJfbPX2OtCZ69iyojBCnLZKkdmHmMBw4AQgTlVwztcvWWJuCou4JyRQTTnmsVeR8+mnTCZuUwPPaeALcyDInmC765NCiMq6cLbFaIxnMChcAKZdtsUewxO-RFJLATIUAWXJuzAKAOCCgMCol80FIrylK85MqsGuLJIc7+XBpWasNRfVeSNeFDzynygBGrDWGuCaSo+lrrU2p6pA6ABrnWGp6KgOADg7m+ouMCIgt8EBwEgHiepHrNUoUjWxGNcUipklRXiLgdrcHkD5YuZOaII2RrXHzeoOB+VOptV6n1fqpyBtQLfeCYAKDhqdShFCDUg43HZVS0atK-kh2BT8npSwsQ3CXseZge99WklRcoihEgHH6pYOQCoRk1JTDMkoOSvhZpjqbhOimU6Z04M0j0RdJlphrpXUQ9+psRlghuLrGSaddyY1bcCoZbdwWjOHdI-lZ8t0TWUaupQQw1xHrWuemF+430Dqhg1NWZr86CKxs-Z9E9e1uxpl-eZ1LFn9rZkO2gpJ-psyOidWal02152pSM16KzVKoG5uszJrqdi9XGOgZoTyWlXLuGR7pqHKYYY7b87DS9l6kgoFVVAAwIBTM43XOYaISSnMvbTA1fJyKrAYmwZeYnQGSZzcwVNcC90qQPQuskc4DirAAIyeAAMzHLYk25jRB5jsbymm4+XGkNdOZXlUZImm7aYk1JsD5AsbyYYOqpuqm8DqbgJpwLunSQGcGHAIDib4L2cKiFs2X8KANL-L7DOH6sGpeC6tdgDTsE1Ms5iVpy8DWqsQPs3VrJP2bsNdugk7BWtbqM8WukJn9ktDgD1ukmx-nMHG6SGp7XNWdYpBNmV068CzedYNskBVUCrFPOeUbk3FtTabmpToYwtLzmALpfSoxjAAGIXAAAZHv3e4Ityc3FeL8UEhQLgWJrM2ahichgk4-iXiOAAVSeAAESgCcI4rbrhXE+AwarqxlsQFWCZzurn3E1LBGy4FByj4P1EHiJNK9GsIEBOTJAXBu4QhDQ4BApykDeSKNnQn1KH4myPnx1u+4isGuNViDn2ViTpdRHiTk5TKnJIpwAoBYjzE0e5klxXISIFFUq9KJoNTPC1btvV0kFPmtE8W6O79HXf1kkJIt3rK2LcevW6TjLtuxsHcWzNh3S2rd4h2zgPbzQ+sxqd5t7bN4A+Hbd1sepwPQcQ+hwjz4UB5U9EMVY1AV0dybl16jhxGP50MGNTU2+LXya6-lwanPaP889C1-sHXs0bOYlIA4UgQVBgG4a+K8XbRWvm-dXSTrfvWuR5K2lvEYIwBoiqAlcKThUA4GKGCXIU+8TR4FDUmzqxAMQAFE51jf4lPoeUuOoPhr1vlbYKSRtDAgA

export type ConvertOutput = {
  file: {
    content: Blob
  }
}

// // https://www.reddit.com/r/typescript/comments/199eutl/typescript_error_type_string_cannot_be_testd_to/
export type ConvertInput = {
  ffmpeg: {
    input: FfmpegFormat
    output: FfmpegFormat
    extend: ConvertVideoWithFfmpegBrowserInput
  }
  latex_to_png: {
    input: ConvertLatexToPngInputFormat
    output: ConvertLatexToPngOutputFormat
    extend: ConvertLatexToPngBrowserInput
  }
  image: {
    input: ImageMagickInputFormat
    output: ImageMagickOutputFormat
    extend: ConvertImageWithImageMagickBrowserInput
  }
  calibre: {
    input: CalibreInputFormat
    output: CalibreOutputFormat
    extend: ConvertDocumentWithCalibreBrowserInput
  }
  pandoc: {
    input: PandocInputFormat
    output: PandocOutputFormat
    extend: ConvertDocumentWithPandocBrowserInput
  }
  libreoffice: {
    input: LibreOfficeInputFormat
    output: LibreOfficeOutputFormat
    extend: ConvertDocumentWithLibreOfficeBrowserInput
  }
  font: {
    input: FontFormat
    output: FontFormat
    extend: ConvertFontWithFontForgeBrowserInput
  }
  puppeteer_txt: {
    input: 'txt'
    output: PuppeteerOutputFormat
    extend: ConvertTxtWithPuppeteerBrowserInput
  }
  puppeteer_markdown: {
    input: 'markdown'
    output: PuppeteerOutputFormat
    extend: ConvertMarkdownWithPuppeteerBrowserInput
  }
}

export type ConvertInputList = Values<ConvertInput>

export type ConvertInputFormat = ConvertInputList['input']

export type ConvertOutputFormat<I extends ConvertInputFormat> =
  ExtractBySubKey<ConvertInputList, I>

export type ConvertWithFontForge<I extends FontFormat> = {
  input: {
    format: I
  }
  output: {
    format: Exclude<ConvertInput['font']['output'], I>
  }
} & ConvertExtension<ConvertInput['font']['extend']>

export type ConvertTxtWithPuppeteer<I extends 'txt'> = {
  input: {
    format: I
  }
  output: {
    format: Exclude<ConvertInput['puppeteer_txt']['output'], I>
  }
} & ConvertExtension<ConvertInput['puppeteer_txt']['extend']>

export type ConvertMarkdownWithPuppeteer<I extends 'markdown'> = {
  input: {
    format: I
  }
  output: {
    format: Exclude<ConvertInput['puppeteer_markdown']['output'], I>
  }
} & ConvertExtension<ConvertInput['puppeteer_markdown']['extend']>

export type ConvertVideoWithFfmpeg<
  I extends ConvertInput['ffmpeg']['input'],
> = {
  input: {
    format: I
  }
  output: {
    format: Exclude<ConvertInput['ffmpeg']['output'], I>
  }
} & ConvertExtension<ConvertInput['ffmpeg']['extend']>

export type ConvertImageWithImageMagick<
  I extends ImageMagickInputFormat,
> = {
  input: {
    format: I
  }
  output: {
    format: Exclude<ConvertInput['image']['output'], I>
  }
} & ConvertExtension<ConvertInput['image']['extend']>

// export type Convert<I extends ConvertInputFormat> = {
//   input: {
//     format: I
//   }
//   output: {
//     format: Exclude<ConvertOutputFormat<I>['output'], I>
//   }
// } & ConvertExtension<I, ConvertOutputFormat<I>['extend']>

// https://www.reddit.com/r/typescript/comments/199eutl/typescript_error_type_string_cannot_be_testd_to/

// const out = await convert({
//   input: {
//     format: 'jpg',
//     file: {
//       path: 'input.png',
//     },
//   },
//   output: {
//     format: 'gif',
//     file: {
//       path: 'output.jpg',
//     },
//   },
// })
// out.file.path

export async function convert<I extends FontFormat>(
  source: ConvertWithFontForge<I>,
  native?: NativeOptions,
): Promise<WorkFileAsBlob>
export async function convert<I extends 'txt'>(
  source: ConvertTxtWithPuppeteer<I>,
): Promise<WorkFileAsBlob>
export async function convert<I extends 'markdown'>(
  source: ConvertMarkdownWithPuppeteer<I>,
): Promise<WorkFileAsBlob>
// export async function convert<
//   I extends ConvertInput['ffmpeg']['input'],
// >(source: ConvertVideoWithFfmpeg<I>): Promise<ConvertOutput>
// export async function convert<I extends ConvertInput['image']['input']>(
//   source: ConvertImageWithImageMagick<I>,
// ): Promise<ConvertOutput>
export async function convert(
  source,
  native?: NativeOptions,
): Promise<WorkFileAsBlob> {
  if (testConvertTxtWithPuppeteerBrowser(source)) {
    return await convertTxtWithPuppeteerBrowser(source, native)
  }

  if (testConvertMarkdownWithPuppeteerBrowser(source)) {
    return await convertMarkdownWithPuppeteerBrowser(source, native)
  }

  if (testConvertFontWithFontForgeBrowser(source)) {
    return await convertFontWithFontForgeBrowser(source, native)
  }

  // if (testConvertImageWithInkscapeBrowser(source)) {
  //   return await convertImageWithInkscapeBrowser(source)
  // }

  // if (testConvertImageWithImageMagickBrowser(source)) {
  //   return await convertImageWithImageMagickBrowser(source)
  // }

  // if (testConvertVideoWithFfmpegBrowser(source)) {
  //   return await convertVideoWithFfmpegBrowser(source)
  // }

  // if (testConvertDocumentWithCalibreBrowser(source)) {
  //   return await convertDocumentWithCalibreBrowser(source)
  // }

  // if (testConvertDocumentWithLibreOfficeBrowser(source)) {
  //   return await convertDocumentWithLibreOfficeBrowser(source)
  // }

  // if (testConvertDocumentWithPandocBrowser(source)) {
  //   return await convertDocumentWithPandocBrowser(source)
  // }

  throw kink('task_not_implemented', {
    task: 'convert',
  })
}
