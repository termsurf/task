import {
  FormatCodeWithClangFormat,
  FormatKotlin,
  FormatRust,
} from '~/code/type/cast'

export type FormatFormat = {
  clang: {
    input: 'c' | 'cpp'
    extend: FormatCodeWithClangFormat
  }
  rust: {
    input: 'rust'
    extend: FormatRust
  }
  kotlin: {
    input: 'kotlin'
    extend: FormatKotlin
  }
}

export type ExtractBySubKey<
  L extends { input: string; extend: any },
  T extends string,
> = L extends unknown ? (T extends L['input'] ? L : never) : never

export type Values<T> = T[keyof T]

export type FormatFormatList = Values<FormatFormat>

export type FormatInputFormat = FormatFormatList['input']

export type FormatOutputFormat<I extends FormatInputFormat> =
  ExtractBySubKey<FormatFormatList, I>

export type Format<I extends FormatInputFormat> = {
  input: {
    format: I
  }
} & ('extend' extends keyof FormatOutputFormat<I>
  ? FormatOutputFormat<I>['extend']
  : {})
