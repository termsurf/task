import {
  buildCommandSequence,
  getCommand,
} from '~/code/tool/shared/command.js'
import {
  BuildCommandToConvertDocumentWithCalibre,
  BuildCommandToConvertDocumentWithCalibreModel,
  BuildCommandToConvertDocumentWithJupyter,
  BuildCommandToConvertDocumentWithJupyterModel,
  BuildCommandToConvertDocumentWithLibreOffice,
  BuildCommandToConvertDocumentWithLibreOfficeModel,
  BuildCommandToConvertDocumentWithPandoc,
  BuildCommandToConvertDocumentWithPandocModel,
  BuildCommandToConvertLatexToPdfWithPdfLatex,
  BuildCommandToConvertLatexToPdfWithPdfLatexModel,
} from '~/code/type/index.js'

export function buildCommandToConvertDocumentWithLibreOffice(
  source: BuildCommandToConvertDocumentWithLibreOffice,
) {
  const input =
    BuildCommandToConvertDocumentWithLibreOfficeModel.parse(source)
  const cmd = getCommand('soffice')
  cmd.link.push('--headless')
  cmd.link.push('--convert-to')
  cmd.link.push(input.output.format)
  cmd.link.push('--outdir')
  cmd.link.push(input.output.directory.path)
  cmd.link.push(input.input.file.path)
  return buildCommandSequence(cmd)
}

export function buildCommandToConvertDocumentWithPandoc(
  source: BuildCommandToConvertDocumentWithPandoc,
) {
  const input =
    BuildCommandToConvertDocumentWithPandocModel.parse(source)

  const cmd = getCommand(`pandoc`)
  cmd.link.push(
    `--sandbox`,
    `-f`,
    `${input.input.format}`,
    `-t`,
    `${input.output.format}`,
    `-o`,
    `${input.output.file.path}`,
    `${input.input.file.path}`,
  )

  return buildCommandSequence(cmd)
}

// https://www.reddit.com/r/hacking/comments/108sp8f/how_to_know_if_a_pdf_contains_malware/

export function buildCommandToConvertLatexToPdfWithPdfLatex(
  source: BuildCommandToConvertLatexToPdfWithPdfLatex,
) {
  const input =
    BuildCommandToConvertLatexToPdfWithPdfLatexModel.parse(source)

  const cmd = getCommand(`pdflatex`)
  cmd.link.push(
    `-interaction=nonstopmode`,
    `-halt-on-error`,
    `-output-directory`,
    `${input.output.directory.path}`,
    `-jobname=document`,
    `${input.input.file.path}`,
  )

  return buildCommandSequence(cmd)
}

export function buildCommandToConvertDocumentWithCalibre(
  source: BuildCommandToConvertDocumentWithCalibre,
) {
  const input =
    BuildCommandToConvertDocumentWithCalibreModel.parse(source)
  const cmd = getCommand(`ebook-convert`)
  cmd.link.push(input.input.file.path, input.output.file.path)
  return buildCommandSequence(cmd)
}

export function buildCommandToConvertDocumentWithJupyter(
  source: BuildCommandToConvertDocumentWithJupyter,
) {
  const input =
    BuildCommandToConvertDocumentWithJupyterModel.parse(source)

  const cmd = getCommand(`jupyter`)
  cmd.link.push(
    `nbconvert`,
    `--to`,
    input.output.format,
    input.input.file.path,
  )

  return buildCommandSequence(cmd)
}
