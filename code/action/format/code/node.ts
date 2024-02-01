import {
  FormatRust,
  FormatKotlin,
  FormatSwift,
  FormatPython,
  FormatRuby,
  FormatAssembly,
  FormatC,
} from '~/code/type/index.js'
import { exec } from '~/code/tool/process.js'
import { buildCommandToFormatRust } from './local/shared.js'
// https://github.com/jgm/pandoc/tree/main/test
// https://github.com/SheetJS/test_files

export async function formatKotlin(input: FormatKotlin) {
  // return await runFormatKotlinCommand(cmd)
}

export async function formatSwift(input: FormatSwift) {
  // return await runFormatSwiftCommand(cmd)
}

export async function formatRust(input: FormatRust) {
  const [cmd] = buildCommandToFormatRust(input)
  return await exec(cmd!.link.join(' '))
}

export async function formatPython(input: FormatPython) {
  // return await runFormatPythonCommand(cmd)
}

export async function formatRuby(input: FormatRuby) {
  // return await runFormatRubyCommand(cmd)
}

export async function formatAssembly(input: FormatAssembly) {
  // return await runFormatAssemblyCommand(cmd)
}

export async function formatC(input: FormatC) {
  // return await runFormatCCommand(cmd)
}