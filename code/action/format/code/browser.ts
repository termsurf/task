import { formatCodeWithPrettierPlugin } from './shared'

// https://github.com/realm/SwiftLint
// https://github.com/realm/SwiftLint/blob/main/Dockerfile

export async function format(source) {
  return await formatCodeWithPrettierPlugin(source)
}
