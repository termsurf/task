import { ConvertFontWithFontForgeNodeLocalInput } from '~/code/type/index.js'
import {
  buildCommandSequence,
  getCommand,
} from '~/code/tool/shared/command.js'

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

  return buildCommandSequence(cmd)
}
