import {
  runCalibreCommand,
  runDocx2pdfCommand,
  runExiftoolCommand,
  runJupyterCommand,
  runLibreOfficeCommand,
  runPandocCommand,
  runPdfLatexCommand,
  runUnoconvCommand,
} from '~/code/action/convert/document/handler'
import { runFontforgeCommand } from '~/code/action/convert/font/runner'
import {
  runConvertCommand,
  runInkscapeCommand,
  runMogrifyCommand,
} from '~/code/action/convert/image/runner'
import { Command, CommandKey, CommandSequence } from '~/code/type'
import { exec } from './process'

export type CommandHandlerName = CommandKey

export const COMMAND_HANDLER: Record<string, (cmd: Command) => any> = {
  convert: runConvertCommand,
  mogrify: runMogrifyCommand,
  inkscape: runInkscapeCommand,
  calibre: runCalibreCommand, // runEbookConvertCommand
  soffice: runLibreOfficeCommand,
  pdflatex: runPdfLatexCommand,
  exiftool: runExiftoolCommand,
  jupyter: runJupyterCommand,
  docx2pdf: runDocx2pdfCommand,
  unoconv: runUnoconvCommand,
  pandoc: runPandocCommand,
  fontforge: runFontforgeCommand,
  unar: runGenericCommand,
  zip: runGenericCommand,
}

export async function runGenericCommand(cmd: Command) {
  await exec(cmd.link)
}

export async function runCommandSequence(sequence: CommandSequence) {
  let output
  for (const command of sequence.call) {
    output = await runCommand(command)
  }
  return output
}

export async function runCommand(command: Command) {
  const handler = COMMAND_HANDLER[command.key]
  if (!handler) {
    throw new Error('No command handler for ' + command.key)
  }
  return await handler(command)
}
