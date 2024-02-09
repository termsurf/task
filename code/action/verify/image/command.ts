import { getCommand } from '~/code/tool/shared/command.js'
import { VerifyImageWithImageMagick } from '~/code/type/index.js'

export async function buildCommandToVerifyImageWithImageMagick(
  input: VerifyImageWithImageMagick,
) {
  const cmd = getCommand(`identify`)
  cmd.link.push(`"${input.input.file.path}"`)
  return [cmd]
}
