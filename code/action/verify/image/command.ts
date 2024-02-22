import { getCommand } from '~/code/tool/shared/command'
import { VerifyImageWithImageMagick } from '~/code/type'

export async function buildCommandToVerifyImageWithImageMagick(
  input: VerifyImageWithImageMagick,
) {
  const cmd = getCommand(`identify`)
  cmd.link.push(`"${input.input.file.path}"`)
  return [cmd]
}
