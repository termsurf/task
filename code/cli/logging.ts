import stripAnsi from 'strip-ansi'
import tint, { Tint } from '@termsurf/tint-text'
import ora from 'ora'
import { log, logWithSpace } from '~/code/tool/logger.js'
import _ from 'lodash'

const M: Tint = { tone: 'magenta' }
const C: Tint = { tone: 'cyan' }
const B: Tint = { tone: 'blackBright' }
const W: Tint = { tone: 'white' }
const WB: Tint = { tone: 'whiteBright' }
const G: Tint = { tone: 'green' }
const R: Tint = { tone: 'red' }

export function stripAnsiFromText(source) {
  return stripAnsi(source.input.text)
}

export function logStart(text: string, color = true) {
  if (color) {
    const spinner = logSpinnerWithSpace(
      `${tint('note <', B)}${tint(text, C)}${tint('>', B)}`,
    )
    return spinner
  } else {
    log(text)
  }
}

export function logSpinnerWithSpace(text: string) {
  // return ora({ prefixText: '\n ', suffixText: '\n' }).start(text)
  return ora().start(text)
}

export function logSpinner(text: string) {
  return ora().start(text)
}

export function logOutput(text: string, color = true, type = 'link') {
  if (!text) {
    return
  }

  if (color) {
    logWithSpace(
      `  ${tint(`${type} <`, B)}${tint(text, G)}${tint('>', B)}`,
    )
  } else {
    log(text)
  }
}

export function logOutputError(text: string, color = true) {
  if (!text) {
    return
  }

  if (color) {
    logWithSpace(
      `  ${tint('link <', B)}${tint(text, R)}${tint('>', B)}`,
    )
  } else {
    log(text)
  }
}

export function renderProgress(text: string, color = true) {
  if (color) {
    return `${tint('note <', B)}${tint(text, C)}${tint('>', B)}`
  } else {
    return text
  }
}

export function logTree(json) {
  const text: Array<string> = []

  traverse(json)

  console.log(text.join('\n'))

  function traverse(json, depth = 1) {
    for (const name in json) {
      const val = json[name]
      if (val) {
        if (_.isObject(val)) {
          text.push(
            ident(depth) +
              tint('name', B) +
              ' ' +
              tint(_.kebabCase(name), W),
          )
          traverse(val, depth + 1)
        } else {
          text.push(
            ident(depth) +
              tint('name', B) +
              ' ' +
              tint(_.kebabCase(name), W),
          )
          text.push(
            ident(depth + 1) +
              tint('note <', B) +
              tint(val, C) +
              tint('>', B),
          )
        }
      }
    }
  }
}

function ident(size: number) {
  return ''.padStart(size * 2, ' ')
}
