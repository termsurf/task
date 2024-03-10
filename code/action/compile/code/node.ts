import {
  CompileCNodeInput,
  CompileCppNodeInput,
  CompileRustNodeInput,
  CompileSwiftNodeInput,
} from '~/code/type/node'
import { CompileFileTest } from './shared'
import { compileCNode } from './c/node'
import { compileRustNode } from './rust/node'
import { compileSwiftNode } from './swift/node'
import { compileCppNode } from './cpp/node'

export type CompileOutput = {
  file: {
    path: string
  }
}

export async function compile(
  source: CompileCNodeInput,
): Promise<CompileOutput>
export async function compile(
  source: CompileCppNodeInput,
): Promise<CompileOutput>
export async function compile(
  source: CompileRustNodeInput,
): Promise<CompileOutput>
export async function compile(
  source: CompileSwiftNodeInput,
): Promise<CompileOutput>
export async function compile(source: CompileFileTest) {
  const input = source as any
  switch (source.input.format) {
    case 'c':
      return compileCNode(input)
    case 'cpp':
      return compileCppNode(input)
    case 'rust':
      return compileRustNode(input)
    case 'swift':
      return compileSwiftNode(input)
  }
}
