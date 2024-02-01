import { CommandCall } from '~/code/tool/command.js'
import { exec } from '~/code/tool/process.js'

export async function handleZipCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}

export async function handleTarCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}

export async function handle7zCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}

export async function handleUnarCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}

export async function handleRarCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}
