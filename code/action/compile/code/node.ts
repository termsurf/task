import * as ftp from 'ftp'
import { Readable } from 'stream'
import fs from 'fs'
import { ReadableStream as ReadableStreamWeb } from 'stream/web'

import fsp, { open } from 'fs/promises'
import tmp from 'tmp-promise'
import {
  Compile,
  CompileInputFormat,
} from '~/code/type/call/compile.js'
import {
  BuildFormatInputOutput,
  CompileCModel,
  CompileCppModel,
  CompileJavaModel,
  CompileRustModel,
  CompileSwiftModel,
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
} from '~/code/action/compile/code/local/shared.js'
import { flattenObjectSafe } from '~/code/tool/object.js'
import kink from '~/code/tool/kink.js'
import { ChildProcessError } from '~/code/tool/process.js'
import ansiToHtml from 'ansi-to-html'
import { compileCRemote } from '~/code/action/compile/code/remote/node.js'
import { getConfig } from '~/code/tool/config'
import {
  ParsePath,
  fetchWithTimeout,
  parsePath,
} from '~/code/tool/index.js'
import _ from 'lodash'
import { basename } from 'path'
import {
  handleLlcCommand,
  handleSwiftcCommand,
} from '../../convert/video/local/node'
import { handleRustcCommand } from '../../format/code/local/node'
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

export async function compile<I extends CompileInputFormat>(
  source: Compile<I>,
) {
  return compileInternal(source)
}

export async function compileInternal(source: BuildFormatInputOutput) {
  switch (source.input.format) {
    case 'swift': {
      const input = CompileSwiftModel.parse(source)
      return await compileSwift(input)
    }
    case 'rust': {
      const input = CompileRustModel.parse(source)
      return await compileRust(input)
    }
    case 'c': {
      const input = CompileCModel.parse(source)
      return await compileC(input)
    }
    case 'cpp': {
      const input = CompileCppModel.parse(source)
      return await compileCpp(input)
    }
    case 'cs': {
      // const input = CompileJavaModel.parse(source)
      // return await compileJava(input)
    }
    case 'java': {
      const input = CompileJavaModel.parse(source)
      return await compileJava(input)
    }
    case 'haskell': {
      // const input = CompileJavaModel.parse(source)
      // return await compileJava(input)
    }
    case 'go': {
      // const input = CompileJavaModel.parse(source)
      // return await compileJava(input)
    }
    case 'kotlin': {
      // const input = CompileJavaModel.parse(source)
      // return await compileJava(input)
    }
    case 'clojure': {
      // const input = CompileJavaModel.parse(source)
      // return await compileJava(input)
    }
  }

  throw kink('task_not_implemented', {
    task: 'compile',
    link: Object.keys(flattenObjectSafe(source) as object),
  })
}

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

export function isRemoteRequest(input) {
  return Boolean(input.surf || getConfig('surf'))
}

export type FileLink = {
  path: ParsePath
  link: Array<string>
}

export function addLocalFilesToList(
  files: Array<FileLink>,
  input: string | Array<string>,
  link: Array<string>,
) {
  if (Array.isArray(input)) {
    input.forEach(path => {
      const parsed = parsePath(path)
      if (parsed.type === 'file-uri') {
        files.push({
          path: parsed,
          link,
        })
      }
    })
  } else {
    const parsed = parsePath(input)
    if (parsed.type === 'file-uri') {
      files.push({
        path: parsed,
        link,
      })
    }
  }
}

export function addRemoteFilesToList(
  files: Array<FileLink>,
  input: string | Array<string>,
  link: Array<string>,
) {
  if (Array.isArray(input)) {
    input.forEach(path => {
      const parsed = parsePath(path)
      if (parsed.type.match(/http|ftp/)) {
        files.push({
          path: parsed,
          link,
        })
      }
    })
  } else {
    const parsed = parsePath(input)
    if (parsed.type.match(/http|ftp/)) {
      files.push({
        path: parsed,
        link,
      })
    }
  }
}

export async function createStreamableFile(
  path: string,
): Promise<File> {
  const name = basename(path)
  const handle = await open(path)
  const { size } = await handle.stat()

  const file = new File([], name)
  file.stream = () => handle.readableWebStream() as ReadableStream

  // Set correct size otherwise, fetch will encounter UND_ERR_REQ_CONTENT_LENGTH_MISMATCH
  Object.defineProperty(file, 'size', { get: () => size })

  return file
}

export async function loadAllFilesForRemoteUpload(
  files: Array<FileLink>,
) {
  const controller = new AbortController()
  const out: any = {}
  files.forEach(async fileLink => {
    const file = await createStreamableFile(fileLink.path.href)
    if (_.has(out, fileLink.link)) {
      const val = _.get(out, fileLink.link)
      const arr = Array.isArray(val) ? val : [val]
      arr.push(file)
      _.set(out, fileLink.link, arr)
    } else {
      _.set(out, fileLink.link, file)
    }
  })
  return out
}

async function bindCompileRemote(input) {
  const through = _.cloneDeep({}, input)
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

async function saveRemoteFile(input, controller?: AbortController) {
  return new Promise((res, rej) => {
    fetchWithTimeout(input.input.path, { controller }).then(r => {
      if (r.body) {
        return Readable.fromWeb(r.body as ReadableStreamWeb<any>)
          .pipe(
            fs.createWriteStream(input.output.file.path, {
              signal: controller?.signal,
            }),
          )
          .on('error', rej)
          .on('close', () => res(input.output.file.path))
      }
    })
  })
}

async function saveRemoteFileAndCleanupOnError(
  input,
  controller?: AbortController,
) {
  try {
    await saveRemoteFile(input, controller)
  } catch (e) {
    if (await fsp.stat(input.output.file.path)) {
      await fsp.unlink(input.output.file.path)
    }
  }
}

// https://www.npmjs.com/package/ftp
async function bindCompileLocal(input) {
  const through = _.cloneDeep({}, input)
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

async function saveAllRemoteFilesLocally(files: Array<FileLink>) {
  const controller = new AbortController()
  return Promise.all(
    files.map(async fileLink => {
      switch (fileLink.path.type) {
        case 'https-uri':
        case 'http-uri': {
          const tmpPath = await tmp.tmpName()
          return saveRemoteFileAndCleanupOnError(
            {
              input: { path: fileLink.path.href },
              output: {
                file: { path: tmpPath },
              },
            },
            controller,
          )
        }
        case 'ftps-uri':
        case 'ftp-uri': {
        }
      }
    }),
  )
}

export function unsetAll(obj, props: Array<Array<string>>) {
  props.forEach(path => {
    _.unset(obj, path)
  })
  return obj
}

export async function compileC(input: CompileC) {
  if (isRemoteRequest(input)) {
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
