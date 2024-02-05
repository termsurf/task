import {
  runCalibreCommand,
  runDocx2pdfCommand,
  runEbookConvertCommand,
  runExiftoolCommand,
  runJupyterCommand,
  runLibreOfficeCommand,
  runPandocCommand,
  runPdfLatexCommand,
  runUnoconvCommand,
} from '~/code/action/convert/document/handler'
import {
  runConvertCommand,
  runInkscapeCommand,
  runMogrifyCommand,
} from '~/code/action/convert/image/runner'
import {
  Command,
  CommandKey,
  CommandSequence,
} from '~/code/type/index.js'

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
