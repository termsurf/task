import {
  CalibreInputFormat,
  CalibreOutputFormat,
  ConvertDocumentWithCalibreNodeInput,
  ConvertDocumentWithLibreOfficeNodeInput,
  ConvertDocumentWithPandocNodeInput,
  ConvertFontWithFontForgeNodeInput,
  ConvertImageWithImageMagickNodeInput,
  ConvertLatexToPngInputFormat,
  ConvertLatexToPngNodeInput,
  ConvertLatexToPngOutputFormat,
  ConvertMarkdownWithPuppeteerNodeInput,
  ConvertTxtWithPuppeteerNodeInput,
  ConvertVideoWithFfmpegNodeInput,
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
} from '~/code/type/index'
import {
  convertDocumentWithCalibreNode,
  convertDocumentWithLibreOfficeNode,
  convertDocumentWithPandocNode,
  convertMarkdownWithPuppeteerNode,
  convertTxtWithPuppeteerNode,
  testConvertDocumentWithCalibreNode,
  testConvertDocumentWithLibreOfficeNode,
  testConvertDocumentWithPandocNode,
  testConvertMarkdownWithPuppeteerNode,
  testConvertTxtWithPuppeteerNode,
} from './document/node'
import {
  convertFontWithFontForgeNode,
  testConvertFontWithFontForgeNode,
} from './font/node'
import {
  convertImageWithImageMagickNode,
  convertImageWithInkscapeNode,
  testConvertImageWithImageMagickNode,
  testConvertImageWithInkscapeNode,
} from './image/node'
import {
  convertVideoWithFfmpegNode,
  testConvertVideoWithFfmpegNode,
} from './video/ffmpeg/node'
import { ConvertExtension } from './shared'

// www.typescriptlang.org/play?#code/C4TwDgpgBAwg9gOwG4QE7AJYCMA2EBicqAtgIbADOUAvFAN4BQUUYCA5gFxQBEAVmG25QAPjzYYAZkNHdWggNxMo-TjznSxkjXwHdFzcRK6z22lXqXBgRnnGvaA7nAlSRPJy4BMF5nZvcrVxkPIPdnCW99KAokVQD7N24Qx3DvRL9tdUTzJQB6XKgAQQATYqg7AAs0KAwEMABXYCgJIjJKKFIEMuAqjFQoAGMiVAgKMERi2rZyxoamlpJyKiqRgDp1hgBfRQYhhAommAB5ADkANQBRACUAFQBJACEAGQuAfXwjq4BZQpuAZS4hVQqFIIAAPABrCAgZywRAodDYPCERaUAB8NCgAG0lMwAORyPEAGlxUDxKmJpLxhkpzHxgVpdLxfkZ+JibEpAF0OlQ9gcGAxQJA4cg0MAjmBMIgKF9SGBMYxmCZOOYuAAFdhRZUcQzcdWapTa9T6thalQcVVQABSAjNAh1Wi4NtNhvNxuttsNhg47udWu9lr9hsCHAyXEICGAWpDyXDiCjwesHBC3jjka1fg4gT1UAjCaVmdjufjGaTKZzea17OTqQrJcN1ezafzPGrYeL6YbsRrLjrnaV1ctla7nHdw+Y+SgFwAHsAIF0eVAEBAIMVV+tVlsdkLoCi2hKpfsFYaKsBiDgcwAJM84YPgUYDVAYSU5m73iiP5-ALcCndQa-ngq0RTHgACK9R2KMAD8XBYHAcB4J0UCbIK95QG+kAfk+kpARQIEQOBkEUDBUBwQhECdPI0QQMQGBDDg0okWRiEIMhqHCnmQFsDg4AVGqcC1JQJFAiC4IIPUxBYGgaJUds7HQBq0y0HQUDACC+xgKQIyRg8EBDMQ0FcAcT6ashih-s6QGaaUUwkeJkloLJOyTvAoroAeGDSjUVCkFAjQYDgGCgKpaHAHAUDFCACCkLRAykDgPGDCM5DQFCIBUAsIoIuKkqeUeWCkBQq7lKxtRzB0C5wLMjTNK0SzyVlYoedKYJKHcdSNHu5BQBAs7zsUVBpbCrnZUiBB1ZQJLMEc1XAF1TS9XOXRUMZUwMBitAAAYACR0O1czzZsHC7TNwAHRNmybT1fXLVAQ0SI17m5dKspgEoUGPTlh4ynKWI7XtHVzRdx10Kd52opdnJKFwy4ItuaF3BQZzxRgxRg51E1gvtNWLf1g3QsN8JimN80UESUDo8AG0U7N11LQNn0kxNFBYtjwDch9an1NAXASPFRXw8KlMUCNYpgjAdN43dBMPaLiK4ONqJkxT1OI8jgVo7N83i+TRwYrjt1c9AH1y+KtMwxAcO-mhMDxTg4uS7d92MwrpO6+T+COwzzvzc1+wbaSps6xTXtUKbTNK1iMAcyHFsIhiwiktr+BotbQuzRQWOh9LMKy0T8vIszuuzdTip0ns2VcMLQd3MXZ2NKndK1aicaosLWwChI9QIAMh7eerqNy3hiAOwb3syy7hdK7r2fh67zNR5yaIABRlY0XCdCAACUXBr00GBh-nwDB3r9CkpIUDLwAhMveJ73iNSlYDUAAGQv2SVX18AD+1I-cxb1vKAIxgD1FQKxPmOABakj5E0FSCw2i70BvNZCmI96rD3lEZgMD6DNwQTML+yDNioMBqsT+cxMFQEnDcCoB9BhVAGBCKgF8ejQDITVeB3VaG+SQCjMoFc0DD1YsALSbAIDzCIKpKof92ETU3E3ScJxIJcGobQg4AUcARTgKMBAeImhkChFATacUEpXWAaA1im1YZoCut1fSYAArQEwAZUihViqIAilFGKdEoA8JwNzCgci6RmLAbAU4lxbiPBeO8T4Px-joJ7n4tcFBV5IImoAt+zR+YQHyMcc41x7jPDeB8b4vw-jxIGIk0Yy82FA1RFvDuDAu49z7sY+2Esx741zpPRWbRlbHA9tnH2E0-YUEbnSFJcwuBBxgOTY4s8j4R16YvKAJsjhQDjtJV+ODSC9zylwPE-D0AP02DvKApIm7VyPsHY4CclyW0co07uuz3GtNaswdpN1x5dLnlPXpU1Qn-M9h0nOsJfbPX2OtCZ69iyojBCnLZKkdmHmMBw4AQgTlVwztcvWWJuCou4JyRQTTnmsVeR8+mnTCZuUwPPaeALcyDInmC765NCiMq6cLbFaIxnMChcAKZdtsUewxO-RFJLATIUAWXJuzAKAOCCgMCol80FIrylK85MqsGuLJIc7+XBpWasNRfVeSNeFDzynygBGrDWGuCaSo+lrrU2p6pA6ABrnWGp6KgOADg7m+ouMCIgt8EBwEgHiepHrNUoUjWxGNcUipklRXiLgdrcHkD5YuZOaII2RrXHzeoOB+VOptV6n1fqpyBtQLfeCYAKDhqdShFCDUg43HZVS0atK-kh2BT8npSwsQ3CXseZge99WklRcoihEgHH6pYOQCoRk1JTDMkoOSvhZpjqbhOimU6Z04M0j0RdJlphrpXUQ9+psRlghuLrGSaddyY1bcCoZbdwWjOHdI-lZ8t0TWUaupQQw1xHrWuemF+430Dqhg1NWZr86CKxs-Z9E9e1uxpl-eZ1LFn9rZkO2gpJ-psyOidWal02152pSM16KzVKoG5uszJrqdi9XGOgZoTyWlXLuGR7pqHKYYY7b87DS9l6kgoFVVAAwIBTM43XOYaISSnMvbTA1fJyKrAYmwZeYnQGSZzcwVNcC90qQPQuskc4DirAAIyeAAMzHLYk25jRB5jsbymm4+XGkNdOZXlUZImm7aYk1JsD5AsbyYYOqpuqm8DqbgJpwLunSQGcGHAIDib4L2cKiFs2X8KANL-L7DOH6sGpeC6tdgDTsE1Ms5iVpy8DWqsQPs3VrJP2bsNdugk7BWtbqM8WukJn9ktDgD1ukmx-nMHG6SGp7XNWdYpBNmV068CzedYNskBVUCrFPOeUbk3FtTabmpToYwtLzmALpfSoxjAAGIXAAAZHv3e4Ityc3FeL8UEhQLgWJrM2ahichgk4-iXiOAAVSeAAESgCcI4rbrhXE+AwarqxlsQFWCZzurn3E1LBGy4FByj4P1EHiJNK9GsIEBOTJAXBu4QhDQ4BApykDeSKNnQn1KH4myPnx1u+4isGuNViDn2ViTpdRHiTk5TKnJIpwAoBYjzE0e5klxXISIFFUq9KJoNTPC1btvV0kFPmtE8W6O79HXf1kkJIt3rK2LcevW6TjLtuxsHcWzNh3S2rd4h2zgPbzQ+sxqd5t7bN4A+Hbd1sepwPQcQ+hwjz4UB5U9EMVY1AV0dybl16jhxGP50MGNTU2+LXya6-lwanPaP889C1-sHXs0bOYlIA4UgQVBgG4a+K8XbRWvm-dXSTrfvWuR5K2lvEYIwBoiqAlcKThUA4GKGCXIU+8TR4FDUmzqxAMQAFE51jf4lPoeUuOoPhr1vlbYKSRtDAgA

export {
  testConvertDocumentWithCalibre,
  testConvertDocumentWithLibreOffice,
  testConvertDocumentWithPandoc,
  testConvertTxtWithPuppeteer,
  testConvertMarkdownWithPuppeteer,
} from './document/shared'

export type ConvertOutput = {
  file: {
    path: string
  }
}

// // https://www.reddit.com/r/typescript/comments/199eutl/typescript_error_type_string_cannot_be_testd_to/
export type ConvertInput = {
  ffmpeg: {
    input: FfmpegFormat
    output: FfmpegFormat
    extend: ConvertVideoWithFfmpegNodeInput
  }
  latex_to_png: {
    input: ConvertLatexToPngInputFormat
    output: ConvertLatexToPngOutputFormat
    extend: ConvertLatexToPngNodeInput
  }
  image: {
    input: ImageMagickInputFormat
    output: ImageMagickOutputFormat
    extend: ConvertImageWithImageMagickNodeInput
  }
  calibre: {
    input: CalibreInputFormat
    output: CalibreOutputFormat
    extend: ConvertDocumentWithCalibreNodeInput
  }
  pandoc: {
    input: PandocInputFormat
    output: PandocOutputFormat
    extend: ConvertDocumentWithPandocNodeInput
  }
  libreoffice: {
    input: LibreOfficeInputFormat
    output: LibreOfficeOutputFormat
    extend: ConvertDocumentWithLibreOfficeNodeInput
  }
  font: {
    input: FontFormat
    output: FontFormat
    extend: ConvertFontWithFontForgeNodeInput
  }
  puppeteer_txt: {
    input: 'txt'
    output: PuppeteerOutputFormat
    extend: ConvertTxtWithPuppeteerNodeInput
  }
  puppeteer_markdown: {
    input: 'markdown'
    output: PuppeteerOutputFormat
    extend: ConvertMarkdownWithPuppeteerNodeInput
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
): Promise<ConvertOutput>
export async function convert<I extends 'txt'>(
  source: ConvertTxtWithPuppeteer<I>,
): Promise<ConvertOutput>
export async function convert<I extends 'markdown'>(
  source: ConvertMarkdownWithPuppeteer<I>,
): Promise<ConvertOutput>
export async function convert<
  I extends ConvertInput['ffmpeg']['input'],
>(source: ConvertVideoWithFfmpeg<I>): Promise<ConvertOutput>
export async function convert<I extends ConvertInput['image']['input']>(
  source: ConvertImageWithImageMagick<I>,
): Promise<ConvertOutput>
export async function convert(source) {
  if (testConvertTxtWithPuppeteerNode(source)) {
    return await convertTxtWithPuppeteerNode(source)
  }

  if (testConvertMarkdownWithPuppeteerNode(source)) {
    return await convertMarkdownWithPuppeteerNode(source)
  }

  if (testConvertFontWithFontForgeNode(source)) {
    return await convertFontWithFontForgeNode(source)
  }

  if (testConvertImageWithInkscapeNode(source)) {
    return await convertImageWithInkscapeNode(source)
  }

  if (testConvertImageWithImageMagickNode(source)) {
    return await convertImageWithImageMagickNode(source)
  }

  if (testConvertVideoWithFfmpegNode(source)) {
    return await convertVideoWithFfmpegNode(source)
  }

  if (testConvertDocumentWithCalibreNode(source)) {
    return await convertDocumentWithCalibreNode(source)
  }

  if (testConvertDocumentWithLibreOfficeNode(source)) {
    return await convertDocumentWithLibreOfficeNode(source)
  }

  if (testConvertDocumentWithPandocNode(source)) {
    return await convertDocumentWithPandocNode(source)
  }
}
