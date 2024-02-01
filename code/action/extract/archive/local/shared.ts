import { getCommand } from '~/code/tool/command.js'
import {
  DecompressWith7Z,
  DecompressWithUnarchiver,
} from '~/code/type/cast.js'

// check if corrupted
// zip -T filename.zip
// 7z t file.zip

export function buildCommandToDecompressWith7z(
  input: DecompressWith7Z,
) {
  const cmd = getCommand(`7z`)
  cmd.link.push(
    `x`,
    `"${input.input.path}"`,
    `-o`,
    `"${input.output.file.path}"`,
  )
  return [cmd]
}

export function buildCommandToDecompressWithUnarchiver(
  input: DecompressWithUnarchiver,
) {
  const cmd = getCommand(`unar`)
  cmd.link.push(
    `${input.input.file.path}`,
    `-o`,
    `${input.output.directory.path}`,
  )

  cmd.link.push('--quiet')

  if (input.output.overwrite) {
    cmd.link.push(`-f`)
  }

  if (input.input.password) {
    cmd.link.push(`-p`, input.input.password)
  }

  return [cmd]
}

// https://github.com/ashang/unar/blob/master/README.md
