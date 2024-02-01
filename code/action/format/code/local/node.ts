import { Command } from '~/code/tool/command'
import { exec } from '~/code/tool/process'

export async function handleRustcCommand(cmd: Command) {
  return await exec(cmd.link.join(' '))
}

export async function handleRustfmtCommand(cmd: Command) {
  return await exec(cmd.link.join(' '))
}

export async function handleRubocopCommand(cmd: Command) {
  return await exec(cmd.link.join(' '))
}

export async function handleShfmtCommand(cmd: Command) {
  return await exec(cmd.link.join(' '))
}
