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
  ArchiveFormat,
  ConvertArchiveBrowserInput,
  ConvertMillimeter,
  ConvertCentimeter,
  ConvertMeter,
  ConvertKilometer,
  ConvertInch,
  ConvertYard,
  ConvertUsSurveyFoot,
  ConvertFoot,
  ConvertMile,
  ConvertSquareMillimeter,
  ConvertSquareCentimeter,
  ConvertSquareMeter,
  ConvertHectare,
  ConvertSquareKilometer,
  ConvertSquareInch,
  ConvertSquareYard,
  ConvertSquareFoot,
  ConvertAcre,
  ConvertSquareMile,
  ConvertMicrogram,
  ConvertMilligram,
  ConvertGram,
  ConvertKilogram,
  ConvertMetricTonne,
  ConvertOunce,
  ConvertPound,
  ConvertTon,
  ConvertCubicMillimeter,
  ConvertCubicCentimeter,
  ConvertMillilitre,
  ConvertCentilitre,
  ConvertDecilitre,
  ConvertLitre,
  ConvertKilolitre,
  ConvertCubicMeter,
  ConvertCubicKilometer,
  ConvertTesked,
  ConvertMatsked,
  ConvertKaffekopp,
  ConvertGlas,
  ConvertKanna,
  ConvertTeaspoon,
  ConvertTablespoon,
  ConvertCubicInch,
  ConvertFluidOunce,
  ConvertCup,
  ConvertPint,
  ConvertQuart,
  ConvertGallon,
  ConvertCubicFoot,
  ConvertCubicYard,
  ConvertEach,
  ConvertDozen,
  ConvertCelsius,
  ConvertKelvin,
  ConvertFahrenheit,
  ConvertRankine,
  ConvertNanosecond,
  ConvertMicrosecond,
  ConvertMillisecond,
  ConvertSecond,
  ConvertMinute,
  ConvertHour,
  ConvertDay,
  ConvertWeek,
  ConvertMonth,
  ConvertYear,
  ConvertBit,
  ConvertKilobit,
  ConvertMegabit,
  ConvertGigabit,
  ConvertTerabit,
  ConvertByte,
  ConvertKilobyte,
  ConvertMegabyte,
  ConvertGigabyte,
  ConvertTerabyte,
  ConvertPartPerMillion,
  ConvertPartPerBillion,
  ConvertPartPerTrillion,
  ConvertPartPerQuadrillion,
  ConvertMetrePerSecond,
  ConvertKilometrePerHour,
  ConvertMilePerHour,
  ConvertKnot,
  ConvertFootPerSecond,
  ConvertMinutePerKilometre,
  ConvertSecondPerMetre,
  ConvertMinutePerMile,
  ConvertSecondPerFoot,
  ConvertPascal,
  ConvertKilopascal,
  ConvertMegapascal,
  ConvertHectopascal,
  ConvertBar,
  ConvertTorr,
  ConvertPoundPerSquareInch,
  ConvertKilopoundPerSquareInch,
  ConvertAmpere,
  ConvertMilliampere,
  ConvertKiloampere,
  ConvertVolt,
  ConvertMillivolt,
  ConvertKilovolt,
  ConvertWatt,
  ConvertMilliwatt,
  ConvertKilowatt,
  ConvertMegawatt,
  ConvertGigawatt,
  ConvertVoltAmpereReactive,
  ConvertMillivoltAmpereReactive,
  ConvertKilovoltAmpereReactive,
  ConvertMegavoltAmpereReactive,
  ConvertGigavoltAmpereReactive,
  ConvertVoltAmpere,
  ConvertMillivoltAmpere,
  ConvertKilovoltAmpere,
  ConvertMegavoltAmpere,
  ConvertGigavoltAmpere,
  ConvertWattHour,
  ConvertMilliwattHour,
  ConvertKilowattHour,
  ConvertMegawattHour,
  ConvertGigawattHour,
  ConvertJoule,
  ConvertKilojoule,
  ConvertVoltAmpereReactiveHour,
  ConvertMillivoltAmpereReactiveHour,
  ConvertKilovoltAmpereReactiveHour,
  ConvertMegavoltAmpereReactiveHour,
  ConvertGigavoltAmpereReactiveHour,
  ConvertCubicMillimeterPerSecond,
  ConvertCubicCentimeterPerSecond,
  ConvertMillilitrePerSecond,
  ConvertCentilitrePerSecond,
  ConvertDecilitrePerSecond,
  ConvertLitrePerSecond,
  ConvertLitrePerMinute,
  ConvertLitrePerHour,
  ConvertKilolitrePerSecond,
  ConvertKilolitrePerMinute,
  ConvertKilolitrePerHour,
  ConvertCubicMeterPerSecond,
  ConvertCubicMeterPerMinute,
  ConvertCubicMeterPerHour,
  ConvertCubicKilometerPerSecond,
  ConvertTeaspoonPerSecond,
  ConvertTablespoonPerSecond,
  ConvertCubicInchPerSecond,
  ConvertCubicInchPerMinute,
  ConvertCubicInchPerHour,
  ConvertFluidOuncePerSecond,
  ConvertFluidOuncePerMinute,
  ConvertFluidOuncePerHour,
  ConvertCupPerSecond,
  ConvertPintPerSecond,
  ConvertPintPerMinute,
  ConvertPintPerHour,
  ConvertQuartPerSecond,
  ConvertGallonPerSecond,
  ConvertGallonPerMinute,
  ConvertGallonPerHour,
  ConvertCubicFootPerSecond,
  ConvertCubicFootPerMinute,
  ConvertCubicFootPerHour,
  ConvertCubicYardPerSecond,
  ConvertCubicYardPerMinute,
  ConvertCubicYardPerHour,
  ConvertLux,
  ConvertFootCandle,
  ConvertMillihertz,
  ConvertHertz,
  ConvertKilohertz,
  ConvertMegahertz,
  ConvertGigahertz,
  ConvertTerahertz,
  ConvertRotationPerMinute,
  ConvertDegreePerSecond,
  ConvertRadianPerSecond,
  ConvertRadian,
  ConvertDegree,
  ConvertGradian,
  ConvertArcminute,
  ConvertArcsecond,
} from '~/code/type/browser'
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
import {
  convertArchiveBrowser,
  testConvertArchiveBrowser,
} from './archive/browser'
import { convertUnit, testConvertUnit } from './unit/shared'

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
  archive: {
    input: ArchiveFormat
    output: ArchiveFormat
    extend: ConvertArchiveBrowserInput
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
    format: ConvertInput['font']['output']
  }
} & ConvertExtension<ConvertInput['font']['extend']>

export type ConvertTxtWithPuppeteer<I extends 'txt'> = {
  input: {
    format: I
  }
  output: {
    format: ConvertInput['puppeteer_txt']['output']
  }
} & ConvertExtension<ConvertInput['puppeteer_txt']['extend']>

export type ConvertMarkdownWithPuppeteer<I extends 'markdown'> = {
  input: {
    format: I
  }
  output: {
    format: ConvertInput['puppeteer_markdown']['output']
  }
} & ConvertExtension<ConvertInput['puppeteer_markdown']['extend']>

export type ConvertVideoWithFfmpeg<
  I extends ConvertInput['ffmpeg']['input'],
> = {
  input: {
    format: I
  }
  output: {
    format: ConvertInput['ffmpeg']['output']
  }
} & ConvertExtension<ConvertInput['ffmpeg']['extend']>

export type ConvertImageWithImageMagick<
  I extends ImageMagickInputFormat,
> = {
  input: {
    format: I
  }
  output: {
    format: ConvertInput['image']['output']
  }
} & ConvertExtension<ConvertInput['image']['extend']>

export type ConvertArchive<I extends ArchiveFormat> = {
  input: {
    format: I
  }
  output: {
    format: ConvertInput['archive']['output']
  }
} & ConvertExtension<ConvertInput['archive']['extend']>

// export type Convert<I extends ConvertInputFormat> = {
//   input: {
//     format: I
//   }
//   output: {
//     format: ConvertOutputFormat<I>['output']
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
export async function convert<I extends ConvertInput['image']['input']>(
  source: ConvertImageWithImageMagick<I>,
): Promise<ConvertOutput>
export async function convert<
  I extends ConvertInput['archive']['input'],
>(source: ConvertArchive<I>): Promise<ConvertOutput>
export async function convert(
  source: ConvertMillimeter,
): Promise<number>
export async function convert(
  source: ConvertCentimeter,
): Promise<number>
export async function convert(source: ConvertMeter): Promise<number>
export async function convert(source: ConvertKilometer): Promise<number>
export async function convert(source: ConvertInch): Promise<number>
export async function convert(source: ConvertYard): Promise<number>
export async function convert(
  source: ConvertUsSurveyFoot,
): Promise<number>
export async function convert(source: ConvertFoot): Promise<number>
export async function convert(source: ConvertMile): Promise<number>
export async function convert(
  source: ConvertSquareMillimeter,
): Promise<number>
export async function convert(
  source: ConvertSquareCentimeter,
): Promise<number>
export async function convert(
  source: ConvertSquareMeter,
): Promise<number>
export async function convert(source: ConvertHectare): Promise<number>
export async function convert(
  source: ConvertSquareKilometer,
): Promise<number>
export async function convert(
  source: ConvertSquareInch,
): Promise<number>
export async function convert(
  source: ConvertSquareYard,
): Promise<number>
export async function convert(
  source: ConvertSquareFoot,
): Promise<number>
export async function convert(source: ConvertAcre): Promise<number>
export async function convert(
  source: ConvertSquareMile,
): Promise<number>
export async function convert(source: ConvertMicrogram): Promise<number>
export async function convert(source: ConvertMilligram): Promise<number>
export async function convert(source: ConvertGram): Promise<number>
export async function convert(source: ConvertKilogram): Promise<number>
export async function convert(
  source: ConvertMetricTonne,
): Promise<number>
export async function convert(source: ConvertOunce): Promise<number>
export async function convert(source: ConvertPound): Promise<number>
export async function convert(source: ConvertTon): Promise<number>
export async function convert(
  source: ConvertCubicMillimeter,
): Promise<number>
export async function convert(
  source: ConvertCubicCentimeter,
): Promise<number>
export async function convert(
  source: ConvertMillilitre,
): Promise<number>
export async function convert(
  source: ConvertCentilitre,
): Promise<number>
export async function convert(source: ConvertDecilitre): Promise<number>
export async function convert(source: ConvertLitre): Promise<number>
export async function convert(source: ConvertKilolitre): Promise<number>
export async function convert(
  source: ConvertCubicMeter,
): Promise<number>
export async function convert(
  source: ConvertCubicKilometer,
): Promise<number>
export async function convert(source: ConvertTesked): Promise<number>
export async function convert(source: ConvertMatsked): Promise<number>
export async function convert(source: ConvertKaffekopp): Promise<number>
export async function convert(source: ConvertGlas): Promise<number>
export async function convert(source: ConvertKanna): Promise<number>
export async function convert(source: ConvertTeaspoon): Promise<number>
export async function convert(
  source: ConvertTablespoon,
): Promise<number>
export async function convert(source: ConvertCubicInch): Promise<number>
export async function convert(
  source: ConvertFluidOunce,
): Promise<number>
export async function convert(source: ConvertCup): Promise<number>
export async function convert(source: ConvertPint): Promise<number>
export async function convert(source: ConvertQuart): Promise<number>
export async function convert(source: ConvertGallon): Promise<number>
export async function convert(source: ConvertCubicFoot): Promise<number>
export async function convert(source: ConvertCubicYard): Promise<number>
export async function convert(source: ConvertEach): Promise<number>
export async function convert(source: ConvertDozen): Promise<number>
export async function convert(source: ConvertCelsius): Promise<number>
export async function convert(source: ConvertKelvin): Promise<number>
export async function convert(
  source: ConvertFahrenheit,
): Promise<number>
export async function convert(source: ConvertRankine): Promise<number>
export async function convert(
  source: ConvertNanosecond,
): Promise<number>
export async function convert(
  source: ConvertMicrosecond,
): Promise<number>
export async function convert(
  source: ConvertMillisecond,
): Promise<number>
export async function convert(source: ConvertSecond): Promise<number>
export async function convert(source: ConvertMinute): Promise<number>
export async function convert(source: ConvertHour): Promise<number>
export async function convert(source: ConvertDay): Promise<number>
export async function convert(source: ConvertWeek): Promise<number>
export async function convert(source: ConvertMonth): Promise<number>
export async function convert(source: ConvertYear): Promise<number>
export async function convert(source: ConvertBit): Promise<number>
export async function convert(source: ConvertKilobit): Promise<number>
export async function convert(source: ConvertMegabit): Promise<number>
export async function convert(source: ConvertGigabit): Promise<number>
export async function convert(source: ConvertTerabit): Promise<number>
export async function convert(source: ConvertByte): Promise<number>
export async function convert(source: ConvertKilobyte): Promise<number>
export async function convert(source: ConvertMegabyte): Promise<number>
export async function convert(source: ConvertGigabyte): Promise<number>
export async function convert(source: ConvertTerabyte): Promise<number>
export async function convert(
  source: ConvertPartPerMillion,
): Promise<number>
export async function convert(
  source: ConvertPartPerBillion,
): Promise<number>
export async function convert(
  source: ConvertPartPerTrillion,
): Promise<number>
export async function convert(
  source: ConvertPartPerQuadrillion,
): Promise<number>
export async function convert(
  source: ConvertMetrePerSecond,
): Promise<number>
export async function convert(
  source: ConvertKilometrePerHour,
): Promise<number>
export async function convert(
  source: ConvertMilePerHour,
): Promise<number>
export async function convert(source: ConvertKnot): Promise<number>
export async function convert(
  source: ConvertFootPerSecond,
): Promise<number>
export async function convert(
  source: ConvertMinutePerKilometre,
): Promise<number>
export async function convert(
  source: ConvertSecondPerMetre,
): Promise<number>
export async function convert(
  source: ConvertMinutePerMile,
): Promise<number>
export async function convert(
  source: ConvertSecondPerFoot,
): Promise<number>
export async function convert(source: ConvertPascal): Promise<number>
export async function convert(
  source: ConvertKilopascal,
): Promise<number>
export async function convert(
  source: ConvertMegapascal,
): Promise<number>
export async function convert(
  source: ConvertHectopascal,
): Promise<number>
export async function convert(source: ConvertBar): Promise<number>
export async function convert(source: ConvertTorr): Promise<number>
export async function convert(
  source: ConvertPoundPerSquareInch,
): Promise<number>
export async function convert(
  source: ConvertKilopoundPerSquareInch,
): Promise<number>
export async function convert(source: ConvertAmpere): Promise<number>
export async function convert(
  source: ConvertMilliampere,
): Promise<number>
export async function convert(
  source: ConvertKiloampere,
): Promise<number>
export async function convert(source: ConvertVolt): Promise<number>
export async function convert(source: ConvertMillivolt): Promise<number>
export async function convert(source: ConvertKilovolt): Promise<number>
export async function convert(source: ConvertWatt): Promise<number>
export async function convert(source: ConvertMilliwatt): Promise<number>
export async function convert(source: ConvertKilowatt): Promise<number>
export async function convert(source: ConvertMegawatt): Promise<number>
export async function convert(source: ConvertGigawatt): Promise<number>
export async function convert(
  source: ConvertVoltAmpereReactive,
): Promise<number>
export async function convert(
  source: ConvertMillivoltAmpereReactive,
): Promise<number>
export async function convert(
  source: ConvertKilovoltAmpereReactive,
): Promise<number>
export async function convert(
  source: ConvertMegavoltAmpereReactive,
): Promise<number>
export async function convert(
  source: ConvertGigavoltAmpereReactive,
): Promise<number>
export async function convert(
  source: ConvertVoltAmpere,
): Promise<number>
export async function convert(
  source: ConvertMillivoltAmpere,
): Promise<number>
export async function convert(
  source: ConvertKilovoltAmpere,
): Promise<number>
export async function convert(
  source: ConvertMegavoltAmpere,
): Promise<number>
export async function convert(
  source: ConvertGigavoltAmpere,
): Promise<number>
export async function convert(source: ConvertWattHour): Promise<number>
export async function convert(
  source: ConvertMilliwattHour,
): Promise<number>
export async function convert(
  source: ConvertKilowattHour,
): Promise<number>
export async function convert(
  source: ConvertMegawattHour,
): Promise<number>
export async function convert(
  source: ConvertGigawattHour,
): Promise<number>
export async function convert(source: ConvertJoule): Promise<number>
export async function convert(source: ConvertKilojoule): Promise<number>
export async function convert(
  source: ConvertVoltAmpereReactiveHour,
): Promise<number>
export async function convert(
  source: ConvertMillivoltAmpereReactiveHour,
): Promise<number>
export async function convert(
  source: ConvertKilovoltAmpereReactiveHour,
): Promise<number>
export async function convert(
  source: ConvertMegavoltAmpereReactiveHour,
): Promise<number>
export async function convert(
  source: ConvertGigavoltAmpereReactiveHour,
): Promise<number>
export async function convert(
  source: ConvertCubicMillimeterPerSecond,
): Promise<number>
export async function convert(
  source: ConvertCubicCentimeterPerSecond,
): Promise<number>
export async function convert(
  source: ConvertMillilitrePerSecond,
): Promise<number>
export async function convert(
  source: ConvertCentilitrePerSecond,
): Promise<number>
export async function convert(
  source: ConvertDecilitrePerSecond,
): Promise<number>
export async function convert(
  source: ConvertLitrePerSecond,
): Promise<number>
export async function convert(
  source: ConvertLitrePerMinute,
): Promise<number>
export async function convert(
  source: ConvertLitrePerHour,
): Promise<number>
export async function convert(
  source: ConvertKilolitrePerSecond,
): Promise<number>
export async function convert(
  source: ConvertKilolitrePerMinute,
): Promise<number>
export async function convert(
  source: ConvertKilolitrePerHour,
): Promise<number>
export async function convert(
  source: ConvertCubicMeterPerSecond,
): Promise<number>
export async function convert(
  source: ConvertCubicMeterPerMinute,
): Promise<number>
export async function convert(
  source: ConvertCubicMeterPerHour,
): Promise<number>
export async function convert(
  source: ConvertCubicKilometerPerSecond,
): Promise<number>
export async function convert(
  source: ConvertTeaspoonPerSecond,
): Promise<number>
export async function convert(
  source: ConvertTablespoonPerSecond,
): Promise<number>
export async function convert(
  source: ConvertCubicInchPerSecond,
): Promise<number>
export async function convert(
  source: ConvertCubicInchPerMinute,
): Promise<number>
export async function convert(
  source: ConvertCubicInchPerHour,
): Promise<number>
export async function convert(
  source: ConvertFluidOuncePerSecond,
): Promise<number>
export async function convert(
  source: ConvertFluidOuncePerMinute,
): Promise<number>
export async function convert(
  source: ConvertFluidOuncePerHour,
): Promise<number>
export async function convert(
  source: ConvertCupPerSecond,
): Promise<number>
export async function convert(
  source: ConvertPintPerSecond,
): Promise<number>
export async function convert(
  source: ConvertPintPerMinute,
): Promise<number>
export async function convert(
  source: ConvertPintPerHour,
): Promise<number>
export async function convert(
  source: ConvertQuartPerSecond,
): Promise<number>
export async function convert(
  source: ConvertGallonPerSecond,
): Promise<number>
export async function convert(
  source: ConvertGallonPerMinute,
): Promise<number>
export async function convert(
  source: ConvertGallonPerHour,
): Promise<number>
export async function convert(
  source: ConvertCubicFootPerSecond,
): Promise<number>
export async function convert(
  source: ConvertCubicFootPerMinute,
): Promise<number>
export async function convert(
  source: ConvertCubicFootPerHour,
): Promise<number>
export async function convert(
  source: ConvertCubicYardPerSecond,
): Promise<number>
export async function convert(
  source: ConvertCubicYardPerMinute,
): Promise<number>
export async function convert(
  source: ConvertCubicYardPerHour,
): Promise<number>
export async function convert(source: ConvertLux): Promise<number>
export async function convert(
  source: ConvertFootCandle,
): Promise<number>
export async function convert(
  source: ConvertMillihertz,
): Promise<number>
export async function convert(source: ConvertHertz): Promise<number>
export async function convert(source: ConvertKilohertz): Promise<number>
export async function convert(source: ConvertMegahertz): Promise<number>
export async function convert(source: ConvertGigahertz): Promise<number>
export async function convert(source: ConvertTerahertz): Promise<number>
export async function convert(
  source: ConvertRotationPerMinute,
): Promise<number>
export async function convert(
  source: ConvertDegreePerSecond,
): Promise<number>
export async function convert(
  source: ConvertRadianPerSecond,
): Promise<number>
export async function convert(source: ConvertRadian): Promise<number>
export async function convert(source: ConvertDegree): Promise<number>
export async function convert(source: ConvertGradian): Promise<number>
export async function convert(source: ConvertArcminute): Promise<number>
export async function convert(source: ConvertArcsecond): Promise<number>
export async function convert(source, native?: NativeOptions) {
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

  if (testConvertImageWithImageMagickBrowser(source)) {
    return await convertImageWithImageMagickBrowser(source)
  }

  if (testConvertArchiveBrowser(source)) {
    return await convertArchiveBrowser(source)
  }

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

  if (testConvertUnit(source)) {
    return await convertUnit(source)
  }
}
