import {
  ConvertFontWithFontForgeNodeLocalInput,
  FONT_FORMAT,
  FontFormat,
} from '~/code/type/index'
import {
  buildCommandSequence,
  getCommand,
} from '~/code/tool/shared/command'
import debug from '~/code/tool/shared/debug'
import { testConvertInputOutput } from '../shared'

export async function buildCommandToConvertFontWithFontForge(
  input: ConvertFontWithFontForgeNodeLocalInput,
) {
  const cmd = getCommand(`fontforge`)

  cmd.link.push(
    `-lang=ff`,
    `-c`,
    `'Open($1); Generate($2)'`,
    `"${input.input.file.path}"`,
    `"${input.output.file.path}"`,
  )

  debug('buildCommandToConvertFontWithFontForge', cmd.link)

  return buildCommandSequence(cmd)
}

export function testConvertFontWithFontForge(input: any) {
  if (!testConvertInputOutput(input)) {
    return false
  }

  const {
    input: { format: a },
    output: { format: b },
  } = input

  if (a === b) {
    return false
  }
  if (!FONT_FORMAT.includes(a as FontFormat)) {
    return false
  }
  if (!FONT_FORMAT.includes(b as FontFormat)) {
    return false
  }
  return true
}
