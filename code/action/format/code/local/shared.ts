// bash format
// shfmt -l -w script.sh
import { format as _formatSql } from 'sql-formatter'
import decodeUtf8 from 'decode-utf8'
import { getCommand } from '~/code/tool/command.js'
import {
  FormatAssembly,
  FormatCodeWithClangFormat,
  FormatKotlin,
  FormatPython,
  FormatRuby,
  FormatRust,
  FormatSqlWithContent,
  FormatSwift,
} from '~/code/type/index.js'

export function buildCommandToFormatCodeWithClangFormat(
  input: FormatCodeWithClangFormat,
) {
  const cmd = getCommand(`clang-format`)
  cmd.link.push(
    `--style="${input.style}"`,
    `"${input.input.file.path}"`,
  )
  return [cmd]
}

// https://github.com/sql-formatter-org/sql-formatter?tab=readme-ov-file
export function formatSqlWithContent(input: FormatSqlWithContent) {
  const text =
    input.input.file.content instanceof ArrayBuffer
      ? decodeUtf8(input.input.file.content)
      : input.input.file.content
  return _formatSql(text)
}

// objdump disassembly
export function buildCommandToFormatKotlin(input: FormatKotlin) {
  const cmd = getCommand('ktfmt')
  cmd.link.push(input.input.file.path)
  return cmd
}

export function buildCommandToFormatSwift(input: FormatSwift) {
  const cmd = getCommand('swift-format')
  cmd.link.push(input.input.file.path)
  return cmd
}

export function buildCommandToFormatRust(input: FormatRust) {
  const cmd = getCommand('rustfmt')
  cmd.link.push(input.input.file.path)
  return [cmd]
}

export function buildCommandToFormatPython(input: FormatPython) {
  const cmd = getCommand('black')
  cmd.link.push(input.input.file.path)
  return cmd
}

export function buildCommandToFormatRuby(input: FormatRuby) {
  const cmd = getCommand('rubocop')
  cmd.link.push(input.input.file.path)
  return cmd
}

export function buildCommandToFormatAssembly(input: FormatAssembly) {
  const cmd = getCommand('asmfmt')
  cmd.link.push(input.input.file.path)
  return cmd
}

// rubocop --autocorrect file.rb

// antlr4-parse Expr.g4 prog -tree

// perltidy somefile.pl
// latexindent.pl.
// https://github.com/Koihik/LuaFormatter
// https://github.com/pseewald/fprettify
// https://github.com/thomasrussellmurphy/istyle-verilog-formatter
