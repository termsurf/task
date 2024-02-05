import { exec } from '~/code/tool/node/process.js'
import { Command } from '~/code/type/index.js'

export async function handleZipCommand(cmd: Command) {
  return await exec(cmd.link.join(' '))
}

export async function handleTarCommand(cmd: Command) {
  return await exec(cmd.link.join(' '))
}

export async function handle7zCommand(cmd: Command) {
  return await exec(cmd.link.join(' '))
}

export async function handleUnarCommand(cmd: Command) {
  return await exec(cmd.link.join(' '))
}

export async function handleRarCommand(cmd: Command) {
  return await exec(cmd.link.join(' '))
}
