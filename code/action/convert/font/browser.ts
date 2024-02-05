import {
  ConvertFontWithFontForgeBrowserCall,
  ConvertFontWithFontForgeBrowserCallModel,
} from '~/code/type/index.js'
import { explainConvertFontWithFontForge } from './shared.js'
import { convertBrowserRemote } from '../browser.js'

export async function convertImageWithImageMagickBrowser(
  source: ConvertFontWithFontForgeBrowserCall,
) {
  const input = ConvertFontWithFontForgeBrowserCallModel.parse(source)
  if (input.explain) {
    return await explainConvertFontWithFontForge(input)
  } else {
    return await convertBrowserRemote(input)
  }
}
