import { exec } from '~/code/tool/node/process.js'
import { Command } from '~/code/type/index.js'

export async function handleRustcCommand(cmd: Command) {
  return await exec(cmd.link)
}

export async function handleRustfmtCommand(cmd: Command) {
  return await exec(cmd.link)
}

export async function handleRubocopCommand(cmd: Command) {
  return await exec(cmd.link)
}

export async function handleShfmtCommand(cmd: Command) {
  return await exec(cmd.link)
}
