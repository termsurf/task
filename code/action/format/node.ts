import { ClangFormat, Values } from '~/code/type/shared'
import {
  FormatExtension,
  FormatInputItem,
  FormatInputWithExtension,
  testFormatCode,
} from './shared'
import {
  FormatAssemblyNodeInput,
  FormatCodeWithClangFormatNodeInput,
  FormatKotlinNodeInput,
  FormatPythonNodeInput,
  FormatRustNodeInput,
  FormatSwiftNodeInput,
} from '../node'
import { formatAssemblyNode } from './code/assembly/node'
import { formatRustNode } from './code/rust/node'
import { formatKotlinNode } from './code/kotlin/node'
import { formatPythonNode } from './code/python/node'
import { formatSwiftNode } from './code/swift/node'
import { formatCodeWithClangFormatNode } from './code/clang/node'

export type FormatInput = {
  clang: {
    input: ClangFormat
    extend: FormatCodeWithClangFormatNodeInput
  }
  assembly: {
    input: 'asm'
    extend: FormatAssemblyNodeInput
  }
  rust: {
    input: 'rust'
    extend: FormatRustNodeInput
  }
  kotlin: {
    input: 'kotlin'
    extend: FormatKotlinNodeInput
  }
  python: {
    input: 'python'
    extend: FormatPythonNodeInput
  }
  swift: {
    input: 'swift'
    extend: FormatSwiftNodeInput
  }
}

export type FormatOutput = {
  file: {
    path: string
  }
}

export type FormatFormatList = Values<FormatInput>

export type FormatInputFormat = FormatFormatList['input']

export type FormatClang = FormatInputWithExtension<FormatInput['clang']>
export type FormatAssembly = FormatInputWithExtension<
  FormatInput['assembly']
>
export type FormatRust = FormatInputWithExtension<FormatInput['rust']>
export type FormatKotlin = FormatInputWithExtension<
  FormatInput['kotlin']
>
export type FormatPython = FormatInputWithExtension<
  FormatInput['python']
>
export type FormatSwift = FormatInputWithExtension<FormatInput['swift']>

export async function format(source: FormatClang): Promise<FormatOutput>
export async function format(
  source: FormatAssembly,
): Promise<FormatOutput>
export async function format(source: FormatRust): Promise<FormatOutput>
export async function format(
  source: FormatKotlin,
): Promise<FormatOutput>
export async function format(
  source: FormatPython,
): Promise<FormatOutput>
export async function format(source: FormatSwift): Promise<FormatOutput>
export async function format(source) {
  if (testFormatCode(source)) {
    switch (source.format) {
      case 'c':
        return await formatCodeWithClangFormatNode(source as any)
      case 'cpp':
        return await formatCodeWithClangFormatNode(source as any)
      case 'assembly':
        return await formatAssemblyNode(source as any)
      case 'rust':
        return await formatRustNode(source as any)
      case 'kotlin':
        return await formatKotlinNode(source as any)
      case 'python':
        return await formatPythonNode(source as any)
      case 'swift':
        return await formatSwiftNode(source as any)
    }
  }
}
