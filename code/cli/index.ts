#!/usr/bin/env -S node --no-warnings=ExperimentalWarning

import * as task from './task.js'
import { Task } from '~/code/type/index.js'
import { logError } from './error.js'
import { read } from './parse.js'

process.on('uncaughtException', kink => {
  logError(kink)
  process.exit(1)
})

call(process.argv)

/**
 * Parse the input into an action and state.
 */

async function call(argv: Array<string>) {
  const input = read(argv)
  return await task.call(input.action as Task, input)
}
