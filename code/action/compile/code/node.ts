import {
  CompileLlvmIrToAssembly,
  FormatKotlin,
  CompileSwift,
  CompileRust,
  CompileC,
  CompileCpp,
  CompileJava,
} from '~/code/type/index.js'
import {
  buildCommandToCompileLlvmIrToAssembly,
  buildCommandToCompileSwift,
  buildCommandToCompileRust,
} from '~/code/action/compile/code/command.js'
import {
  flattenObjectSafe,
  unsetAll,
} from '~/code/tool/shared/object.js'
import kink from '~/code/tool/shared/kink.js'
import { ChildProcessError } from '~/code/tool/node/process.js'
import ansiToHtml from 'ansi-to-html'
import _ from 'lodash'
import {
  handleLlcCommand,
  handleSwiftcCommand,
} from '../../convert/video/local/node'
import { handleRustcCommand } from '../../format/code/handler'
import {
  loadAllFilesForRemoteUpload,
  saveAllRemoteFilesLocally,
} from '~/code/tool/node/file.js'
import {
  FileLink,
  addLocalFilesToList,
  addRemoteFilesToList,
} from '~/code/tool/shared/file.js'
// import Parser from 'tree-sitter'
// import JavaScript from 'tree-sitter-javascript'
// import Swift from 'tree-sitter-swift'
// import fsp from 'fs/promises'

// // compileToAsm({
// //   input: {
// //     format: 'js',
// //     file: { path: 'test/file/code/quicksort/quicksort.js' },
// //   },
// // })

// // compileToAsm({
// //   input: {
// //     format: 'js',
// //     file: { path: 'test/file/code/quicksort/quicksort.swift' },
// //   },
// // })

// const TREE_SITTER_LANGUAGE: Record<string, any> = {
//   js: JavaScript,
//   swift: Swift,
// }

// export async function compileToAsm(input: CompileToAst) {
//   const parser = new Parser()
//   parser.setLanguage(TREE_SITTER_LANGUAGE[input.input.format])
//   const code = await fsp.readFile(input.input.file.path, 'utf-8')
//   const tree = parser.parse(code)
//   return traverse(tree.rootNode)

//   function traverse(node) {
//     const out: any = {
//       form: node.type,
//       base: node.startPosition,
//       head: node.endPosition,
//     }
//     if (node.type.match(/^[\w_]+$/)) {
//       switch (node.type) {
//         case 'identifier':
//         case 'number':
//         case 'string':
//         case 'comment':
//         case 'string_fragment':
//         case 'template_string':
//         case 'simple_identifier':
//         case 'var':
//         case 'let':
//         case 'const':
//         case 'true':
//         case 'return':
//         case 'false':
//           out.text = node.text
//           break
//       }
//     } else {
//       out.text = node.text
//     }
//     if (node.children?.length) {
//       out.nest = []
//       for (const child of node.children) {
//         out.nest.push(traverse(child))
//       }
//     }
//     return out
//   }
// }

// function define(
//   lang: string,
//   build: (x) => Array<string>,
//   run: (cmd: Array<string>) => Promise<void>,
// ) {
//   const IO = BuildBaseFileInputOutputModel.superRefine(
//     transform_input_output_file(lang, lang),
//   )

//   CALL_CODE[String(`/${lang}/format`)] = async (source: any) => {
//     const input = IO.parse(source)
//     const cmd = build(input)
//     await run(cmd)
//   }
// }

// define('kotlin', FormatKotlin, runFormatKotlinCommand)
// define('swift', FormatSwift, runFormatSwiftCommand)
// define('rust', FormatRust, runFormatRustCommand)
// define('python', FormatPython, runFormatPythonCommand)
// define('ruby', FormatRuby, runFormatRubyCommand)
// define(
//   'assembly',
//   FormatAssembly,
//   runFormatAssemblyCommand,
// )
// define('c', FormatC, runFormatCCommand)
// define('cpp', FormatCpp, runFormatCCommand)
// define('java', FormatJava, runFormatCCommand)

//  CSharp: .cs
//  Java: .java
//  JavaScript: .mjs .js .ts
//  Json: .json
//  Objective-C: .m .mm
//  Proto: .proto .protodevel
//  TableGen: .td
//  TextProto: .textpb .pb.txt .textproto .asciipb
//  Verilog: .sv .svh .v .vh

// cargo rustc --release -- --emit asm
// rustc --emit=asm
// rustc --emit=llvm-ir
// cargo rustc -- --emit=llvm-ir

// objdump -S --x86-asm-syntax=intel example.out
// objdump -f assert
// objdump -x assert

// file magic numbers: https://gist.github.com/Qti3e/6341245314bf3513abb080677cd1c93b

export async function compileLlvmIrToAssembly(
  input: CompileLlvmIrToAssembly,
) {
  const list = buildCommandToCompileLlvmIrToAssembly(input)
  for (const cmd of list) {
    await handleLlcCommand(cmd)
  }
  return input.output.file.path
}

// wat2wasm simple.wat -o simple.wasm

export async function compileKotlin(input: FormatKotlin) {
  // return await runFormatKotlinCommand(cmd)
}

export async function compileC(input: CompileC) {
  if (input.remote) {
    const bind = await bindCompileRemote(input)
    return await compileCRemote(bind)
  }

  const bind = await bindCompileLocal(input)
  return await compileCLocal(input)
}

export async function compileCLocal(input) {}

export async function compileJava(input: CompileJava) {
  // return await runFormatKotlinCommand(cmd)
}

export async function compileCpp(input: CompileCpp) {
  // return await runFormatKotlinCommand(cmd)
}

export async function compileSwift(input: CompileSwift) {
  const [cmd] = buildCommandToCompileSwift(input)
  handleSwiftcCommand(cmd!)
  // return await runFormatSwiftCommand(cmd)
}

export async function compileRust(input: CompileRust) {
  const [cmd] = buildCommandToCompileRust(input)
  try {
    await handleRustcCommand(cmd!)
  } catch (e) {
    if (e instanceof ChildProcessError) {
      if (e.data.stderr) {
        throw kink('compilation_error', { note: e.data.stderr })
      } else {
        throw kink('compilation_error', { note: e.data.stdout ?? '' })
      }
    } else if (e instanceof Error) {
      throw kink('compilation_error', { note: e.message })
    }
  }
}

// https://www.npmjs.com/package/ftp
export async function bindCompileLocal(input) {
  const through = _.cloneDeep(input)
  const files: Array<FileLink> = []

  if (input.input.file.path) {
    addRemoteFilesToList(files, input.input.file.path, [
      'input',
      'file',
      'path',
    ])
  }

  if (files.length) {
    const fileThrough = await saveAllRemoteFilesLocally(files)
    unsetAll(through, [['input', 'file', 'path']])
    _.merge(through, fileThrough)
  }

  return through
}

export async function bindCompileRemote(input) {
  const through = _.cloneDeep(input)
  const files: Array<FileLink> = []

  if (input.input.file.path) {
    addLocalFilesToList(files, input.input.file.path, [
      'input',
      'file',
      'content',
    ])
  }

  if (files.length) {
    const fileThrough = await loadAllFilesForRemoteUpload(files)
    _.merge(through, fileThrough)
    unsetAll(through, [['input', 'file', 'path']])
  }

  return through
}
