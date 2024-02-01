export async function handleRustcCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}

export async function handleRustfmtCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}

export async function handleRubocopCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}

export async function handleShfmtCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}
