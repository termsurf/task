import {
  Format,
  FormatInput,
  FormatOutput,
} from '../format/code/shared'
import {
  convert,
  ConvertImageWithImageMagick,
  ConvertInput,
  ConvertInputFormat,
  ConvertMarkdownWithPuppeteer,
  ConvertOutput,
  ConvertTxtWithPuppeteer,
  ConvertVideoWithFfmpeg,
  ConvertWithFontForge,
  FontFormat,
  format,
} from '../node'
import { Action } from '../shared'

export async function call<I extends FontFormat>(
  action: 'convert',
  source: ConvertWithFontForge<I>,
): Promise<ConvertOutput>
export async function call<I extends 'txt'>(
  action: 'convert',
  source: ConvertTxtWithPuppeteer<I>,
): Promise<ConvertOutput>
export async function call<I extends 'markdown'>(
  action: 'convert',
  source: ConvertMarkdownWithPuppeteer<I>,
): Promise<ConvertOutput>
export async function call<I extends ConvertInput['ffmpeg']['input']>(
  action: 'convert',
  source: ConvertVideoWithFfmpeg<I>,
): Promise<ConvertOutput>
export async function call<I extends ConvertInput['image']['input']>(
  action: 'convert',
  source: ConvertImageWithImageMagick<I>,
): Promise<ConvertOutput>
export async function call<
  C_I extends ConvertInputFormat,
  F extends Format,
>(action: 'format', source: FormatInput<F>): Promise<FormatOutput>
export async function call<A extends Action>(action: A, source) {
  switch (action) {
    case 'convert':
      return await convert(source)
    case 'format':
      return await format(source)
  }
}

// type Call<
//   C extends keyof ConvertibleFormats,
//   O,
//   F extends keyof FormatOptions,
// > = Convert<C, O extends ConvertibleFormats[C] ? O : never> | Format<F>

// type Outputs<I extends keyof ConvertibleFormats, Output> = {
//   convert: OutputsConvert<I, Output>
//   format: FormatOutputs
// }

// export function isValidConvertOutputFormat<
//   I extends keyof ConvertFormatInputToOutput,
//   O extends ConvertFormatInputToOutput[C],
// >(input: any): input is Convert<I, O> {
//   if (!('input' in input && 'output' in input)) return false
//   const { format: inputFormat } = input.input
//   const { format: outputFormat } = input.output
//   // This checks if the output format is a valid conversion target for the input format.
//   // Note: This still doesn't make `call` return `never` at compile time based on dynamic values.
//   return CONVERTIBLE_FORMATS.includes(inputFormat) && false //CONVERTIBLE_FORMATS.includes(outputFormat)
// }

// function call<
//   I extends keyof ConvertFormatInputToOutput,
//   CO,
//   F extends keyof FormatOptions,
// >(
//   input: Convert<
//     C,
//     CO extends ConvertFormatInputToOutput[C] ? CO : never
//   > & {
//     action: 'convert'
//   },
// ): ConvertOutput<C, CO> | never
// function call<
//   C extends keyof ConvertFormatInputToOutput,
//   CO,
//   F extends keyof FormatOptions,
// >(input: Format<F> & { action: 'format' }): Outputs<C, CO>['format']
// function call<
//   C extends keyof ConvertFormatInputToOutput,
//   CO,
//   F extends keyof FormatOptions,
//   A extends keyof Outputs<C, CO>,
// >(input: Call<C, CO, F> & { action: A }) {
//   switch (input.action) {
//     case 'convert': {
//       if (isValidConversion(input)) return convert(input)
//       else {
//         throw new Error('nope')
//       }
//     }
//     case 'format':
//       return format(input as Format<F>)
//     default:
//       throw new Error('oops')
//   }
// }

// call({
//   action: 'convert' as Call,
//   input: {
//     format: 'png',
//     file: {
//       path: 'foo',
//     },
//   },
//   output: {
//     format: 'jpg',
//     file: {
//       path: 'bar.jpg',
//     },
//   },
// })
