import {
  CompileSwift,
  CompileRust,
  CompileC,
  BackendCompilationOutput,
  RustOutputFormat,
  CompileCpp,
} from '~/code/cast'

// // https://www.reddit.com/r/typescript/comments/199eutl/typescript_error_type_string_cannot_be_used_to/
export type CompileFormat = {
  swift: {
    input: 'swift'
    output: BackendCompilationOutput
    extend: CompileSwift
  }
  rust: {
    input: 'rust'
    output: RustOutputFormat
    extend: CompileRust
  }
  c: {
    input: 'c'
    output: BackendCompilationOutput
    extend: CompileC
  }
  cpp: {
    input: 'cpp'
    output: BackendCompilationOutput
    extend: CompileCpp
  }
}

export type ExtractBySubKey<
  L extends { input: string; output: string; extend: any },
  T extends string,
> = L extends unknown ? (T extends L['input'] ? L : never) : never

export type Values<T> = T[keyof T]

export type CompileFormatList = Values<CompileFormat>

export type CompileInputFormat = CompileFormatList['input']

export type CompileOutputFormat<I extends CompileInputFormat> =
  ExtractBySubKey<CompileFormatList, I>

export type Compile<I extends CompileInputFormat> = {
  input: {
    format: I
  }
  output: {
    format: CompileOutputFormat<I>['output']
  }
} & ('extend' extends keyof CompileOutputFormat<I>
  ? CompileOutputFormat<I>['extend']
  : {})
