#!/usr/bin/env -S node --no-warnings=ExperimentalWarning

import * as task from './task'
import { Task } from '~/code/type/index'
import { read } from './parse'
import { logError } from './logging'

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
