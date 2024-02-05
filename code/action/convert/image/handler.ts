import { ChildProcessError, exec } from '~/code/tool/node/process.js'
import { Command } from '~/code/type/index.js'

export async function handleConvertCommand(cmd: Command) {
  try {
    return await exec(cmd.link.join(' '))
  } catch (e) {
    if (e instanceof ChildProcessError) {
      if (e.data.stderr) {
        if (e.data.stderr.match(/^convert: unable to open image/i)) {
          // throw new Kink
          throw new Error(`Cannot process image.`)
        }
      }
    } else {
      throw new Error(`System error`)
    }
  }
}

export async function handleMogrifyCommand(cmd: Command) {
  return await exec(cmd.link.join(' '))
}

export async function handleInkscapeCommand(cmd: Command) {
  return await exec(cmd.link.join(' '))
}
