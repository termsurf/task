import { ExtractBySubKey, Values } from '~/code/type'
import {
  CompileSwift,
  CompileRust,
  CompileC,
  BackendCompilationOutput,
  RustOutputFormat,
  CompileCpp,
  BuildFormatInputOutput,
} from '~/code/type/cast'

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

export async function compile<I extends CompileInputFormat>(
  source: Compile<I>,
) {
  return compileInternal(source)
}

export async function compileInternal(source: BuildFormatInputOutput) {
  // switch (source.input.format) {
  //   case 'swift': {
  //     const input = CompileSwiftModel.parse(source)
  //     return await compileSwift(input)
  //   }
  //   case 'rust': {
  //     const input = CompileRustModel.parse(source)
  //     return await compileRust(input)
  //   }
  //   case 'c': {
  //     const input = CompileCModel.parse(source)
  //     return await compileC(input)
  //   }
  //   case 'cpp': {
  //     const input = CompileCppModel.parse(source)
  //     return await compileCpp(input)
  //   }
  //   case 'cs': {
  //     // const input = CompileJavaModel.parse(source)
  //     // return await compileJava(input)
  //   }
  //   case 'java': {
  //     const input = CompileJavaModel.parse(source)
  //     return await compileJava(input)
  //   }
  //   case 'haskell': {
  //     // const input = CompileJavaModel.parse(source)
  //     // return await compileJava(input)
  //   }
  //   case 'go': {
  //     // const input = CompileJavaModel.parse(source)
  //     // return await compileJava(input)
  //   }
  //   case 'kotlin': {
  //     // const input = CompileJavaModel.parse(source)
  //     // return await compileJava(input)
  //   }
  //   case 'clojure': {
  //     // const input = CompileJavaModel.parse(source)
  //     // return await compileJava(input)
  //   }
  // }
  // throw kink('task_not_implemented', {
  //   task: 'compile',
  //   link: Object.keys(flattenObjectSafe(source) as object),
  // })
}
