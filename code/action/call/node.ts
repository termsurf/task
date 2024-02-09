import {
  FormatPrettier,
  FormatPrettierInput,
} from '../format/code/shared.js'
import {
  convert,
  Convert,
  ConvertInputFormat,
  format,
} from '../node.js'

export enum Call {
  Convert = 'convert',
  Format = 'format',
}

export type CallInputMap<
  C extends ConvertInputFormat,
  F extends FormatPrettier,
> = {
  [Call.Convert]: Convert<C>
  [Call.Format]: FormatPrettierInput<F>
}

export type CallInput<
  T extends Call,
  C extends ConvertInputFormat,
  F extends FormatPrettier,
> = T extends keyof CallInputMap<C, F>
  ? CallInputMap<C, F>[T] & { action: T }
  : never

export async function call<
  T extends Call,
  C extends ConvertInputFormat,
  F extends FormatPrettier,
>(input: CallInput<T, C, F>) {
  switch (input.action) {
    case 'convert':
      return await convert(input as Convert<C>)
    case 'format':
      return await format(input as FormatPrettierInput<F>)
  }
}

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
