import {
  handleCalibreCommand,
  handleDocx2pdfCommand,
  handleExiftoolCommand,
  handleJupyterCommand,
  handleLibreOfficeCommand,
  handlePandocCommand,
  handlePdfLatexCommand,
  handleUnoconvCommand,
} from '~/code/action/convert/document/local/command'
import {
  handleConvertCommand,
  handleInkscapeCommand,
  handleMogrifyCommand,
} from '~/code/action/convert/image/local/command'
import {
  Command,
  CommandKey,
  CommandSequence,
} from '~/code/type/index.js'

export type CommandHandlerName = CommandKey

export const COMMAND_HANDLER: Record<string, (cmd: Command) => any> = {
  convert: handleConvertCommand,
  mogrify: handleMogrifyCommand,
  inkscape: handleInkscapeCommand,
  calibre: handleCalibreCommand, // handleEbookConvertCommand
  soffice: handleLibreOfficeCommand,
  pdflatex: handlePdfLatexCommand,
  exiftool: handleExiftoolCommand,
  jupyter: handleJupyterCommand,
  docx2pdf: handleDocx2pdfCommand,
  unoconv: handleUnoconvCommand,
  pandoc: handlePandocCommand,
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
