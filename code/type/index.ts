export * from './cast.js'
export * from './take.js'
export * from './code.js'
export * from './bond.js'

export type IOPath = {
  inputPath: string
  outputPath: string
}

export type CallLink = (input: any) => Promise<void> | void
