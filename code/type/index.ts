export * from './cast.js'
export * from './take.js'
export * from './code.js'
export * from './bond.js'

export type IOPath = {
  inputPath: string
  outputPath: string
}

export type CallLink = (input: any) => Promise<void> | void

export type ExtractBySubKey<
  L extends { input: string; output: string; extend: any },
  T extends string,
> = L extends unknown ? (T extends L['input'] ? L : never) : never

export type Values<T> = T[keyof T]
