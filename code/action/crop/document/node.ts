import {
  buildCommandSequence,
  getCommand,
} from '~/code/tool/shared/command'
import {
  CropPdfWithPdfCrop,
  CropPdfWithPdfCropModel,
} from '~/code/type'

export async function cropPdfWithPdfCropNode(
  source: CropPdfWithPdfCrop,
) {
  const input = CropPdfWithPdfCropModel.parse(source)
  const command = getCommand('pdfcrop')

  if (input.margin != null) {
    command.link.push(`-margin`, String(input.margin))
  }

  command.link.push(input.input.file.path)
  command.link.push(input.output.file.path)

  return buildCommandSequence(command)
}
