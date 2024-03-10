import { ClangFormat, Values } from '~/code/type/shared'
import { FormatInputWithExtension, testFormatCode } from './shared'
import {
  FormatAssemblyBrowserInput,
  FormatCodeWithClangFormatBrowserInput,
  FormatKotlinBrowserInput,
  FormatPythonBrowserInput,
  FormatRustBrowserInput,
  FormatSwiftBrowserInput,
} from '../browser'
import { formatAssemblyBrowser } from './code/assembly/browser'
import { formatRustBrowser } from './code/rust/browser'
import { formatKotlinBrowser } from './code/kotlin/browser'
import { formatPythonBrowser } from './code/python/browser'
import { formatSwiftBrowser } from './code/swift/browser'
import { formatCodeWithClangFormatBrowser } from './code/clang/browser'

export type FormatInput = {
  clang: {
    input: ClangFormat
    extend: FormatCodeWithClangFormatBrowserInput
  }
  assembly: {
    input: 'asm'
    extend: FormatAssemblyBrowserInput
  }
  rust: {
    input: 'rust'
    extend: FormatRustBrowserInput
  }
  kotlin: {
    input: 'kotlin'
    extend: FormatKotlinBrowserInput
  }
  python: {
    input: 'python'
    extend: FormatPythonBrowserInput
  }
  swift: {
    input: 'swift'
    extend: FormatSwiftBrowserInput
  }
}

export type FormatOutput = {
  file: {
    content: Blob
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
        return await formatCodeWithClangFormatBrowser(source as any)
      case 'cpp':
        return await formatCodeWithClangFormatBrowser(source as any)
      case 'assembly':
        return await formatAssemblyBrowser(source as any)
      case 'rust':
        return await formatRustBrowser(source as any)
      case 'kotlin':
        return await formatKotlinBrowser(source as any)
      case 'python':
        return await formatPythonBrowser(source as any)
      case 'swift':
        return await formatSwiftBrowser(source as any)
    }
  }
}
