import {
  CompileCBrowserInput,
  CompileCppBrowserInput,
  CompileRustBrowserInput,
  CompileSwiftBrowserInput,
} from '~/code/type/browser'
import { CompileFileTest } from './shared'
import { compileCBrowser } from './c/browser'
import { compileRustBrowser } from './rust/browser'
import { compileSwiftBrowser } from './swift/browser'
import { compileCppBrowser } from './cpp/browser'

export type CompileOutput = {
  file: {
    content: Blob
  }
}

export async function compile(
  source: CompileCBrowserInput,
): Promise<CompileOutput>
export async function compile(
  source: CompileCppBrowserInput,
): Promise<CompileOutput>
export async function compile(
  source: CompileRustBrowserInput,
): Promise<CompileOutput>
export async function compile(
  source: CompileSwiftBrowserInput,
): Promise<CompileOutput>
export async function compile(source: CompileFileTest) {
  const input = source as any
  switch (source.input.format) {
    case 'c':
      return compileCBrowser(input)
    case 'cpp':
      return compileCppBrowser(input)
    case 'rust':
      return compileRustBrowser(input)
    case 'swift':
      return compileSwiftBrowser(input)
  }
}
