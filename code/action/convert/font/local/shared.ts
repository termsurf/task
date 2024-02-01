import { getCommand } from '~/code/tool/command.js'
import { ConvertFontWithFontForge } from '~/code/type/index.js'

export async function buildCommandToConvertFontWithFontForge(
  input: ConvertFontWithFontForge,
) {
  const cmd = getCommand(`fontforge`)
  cmd.link.push(
    `-lang=ff`,
    `-c`,
    `'Open($1); Generate($2)'`,
    `"${input.input.file.path}"`,
    `"${input.output.file.path}"`,
  )

  return [cmd]
}
