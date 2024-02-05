import {
  ConvertFontWithFontForgeNodeCommand,
  ConvertFontWithFontForgeNodeCommandModel,
  ConvertImageWithImageMagickBrowserCall,
} from '~/code/type'
import {
  buildCommandSequence,
  getCommand,
} from '~/code/tool/shared/command.js'

export async function buildCommandToConvertFontWithFontForge(
  source: ConvertFontWithFontForgeNodeCommand,
) {
  const input = ConvertFontWithFontForgeNodeCommandModel.parse(source)

  const cmd = getCommand(`fontforge`)
  cmd.link.push(
    `-lang=ff`,
    `-c`,
    `'Open($1); Generate($2)'`,
    `"${input.input.file.path}"`,
    `"${input.output.file.path}"`,
  )

  return buildCommandSequence(cmd)
}

export async function explainConvertFontWithFontForge(
  input: ConvertImageWithImageMagickBrowserCall,
) {
  switch (input.explain) {
    case 'code': {
    }
    case 'command': {
      // return buildNodeFunctionToConvertImageWithImageMagick(input)
    }
    case 'curl': {
      // return buildBrowserFunctionToConvertImageWithImageMagick(input)
    }
  }
}
