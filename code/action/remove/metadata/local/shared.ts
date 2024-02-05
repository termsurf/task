import { getCommand } from '~/code/tool/command.js'
import { RemoveImageMetadata } from '~/code/type/index.js'

export function buildCommandToRemoveImageMetadata(
  input: RemoveImageMetadata,
) {
  const cmd = getCommand(`exiftool`)
  cmd.link.push(`-all=`, `"${input.input.file.path}"`)
  return [cmd]
}
