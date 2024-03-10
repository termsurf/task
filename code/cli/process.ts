import { logError } from './logging'

export function exitWithError(e) {
  logError(e)
  process.exit(1)
}
