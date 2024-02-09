import {
  FormatPrettier,
  FormatPrettierInput,
  formatCodeWithPrettierPlugin,
} from './shared.js'

// https://github.com/realm/SwiftLint
// https://github.com/realm/SwiftLint/blob/main/Dockerfile

export async function format<T extends FormatPrettier>(
  source: FormatPrettierInput<T>,
) {
  return await formatCodeWithPrettierPlugin(source)
}
