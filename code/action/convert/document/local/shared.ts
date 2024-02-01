import { getCommand } from '~/code/tool/command.js'
import {
  ConvertDocumentWithCalibre,
  ConvertDocumentWithJupyterModel,
  ConvertDocumentWithLibreOffice,
  ConvertDocumentWithPandoc,
  ConvertLatexToPdfWithPdfLatex,
} from '~/code/type/index.js'

export function buildCommandToConvertDocumentWithLibreOffice(
  input: ConvertDocumentWithLibreOffice,
) {
  const cmd = getCommand('soffice')
  cmd.link.push('--headless')
  cmd.link.push('--convert-to')
  cmd.link.push(input.output.format as string)
  cmd.link.push('--outdir')
  cmd.link.push(input.output.directory.path as string)
  cmd.link.push(input.input.file.path as string)
  return [cmd]
}

export function buildCommandToConvertDocumentWithPandoc(
  source: ConvertDocumentWithPandoc,
) {
  const { input, output } = source

  const cmd = getCommand(`pandoc`)
  cmd.link.push(
    `--sandbox`,
    `-f`,
    `${input.format}`,
    `-t`,
    `${output.format}`,
    `-o`,
    `${output.file.path}`,
    `${input.file.path}`,
  )

  return [cmd]
}

// https://www.reddit.com/r/hacking/comments/108sp8f/how_to_know_if_a_pdf_contains_malware/

export function buildCommandToConvertLatexToPdfWithPdfLatex(
  input: ConvertLatexToPdfWithPdfLatex,
) {
  const cmd = getCommand(`pdflatex`)
  cmd.link.push(
    `-interaction=nonstopmode`,
    `-halt-on-error`,
    `-output-directory`,
    `${input.output.directory}`,
    `-jobname=${input.output.file.name}`,
    `${input.input.file.path}`,
  )

  return [cmd]
}

export function buildCommandToConvertDocumentWithCalibre(
  input: ConvertDocumentWithCalibre,
) {
  const cmd = getCommand(`ebook-convert`)
  cmd.link.push(input.input.file.path, input.output.file.path)
  return [cmd]
}

export function buildCommandToConvertDocumentWithJupyter(source) {
  const input = ConvertDocumentWithJupyterModel.parse(source)
  const cmd = getCommand(`jupyter`)
  cmd.link.push(
    `nbconvert`,
    `--to`,
    input.output.format,
    input.input.file.path,
  )
  return [cmd]
}
