import { ConvertFontWithFontForgeNodeLocalInput } from '~/code/type/index.js'
import {
  buildCommandSequence,
  getCommand,
} from '~/code/tool/shared/command.js'
import debug from '~/code/tool/shared/debug.js'

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
