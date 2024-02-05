import {
  ConvertImageWithImageMagickBrowserCall,
  ConvertImageWithImageMagickBrowserCallModel,
} from '~/code/type/index.js'
import { explainConvertImageWithImageMagick } from './shared.js'
import { convertBrowserRemote } from '../browser.js'

export async function convertImageWithImageMagickBrowser(
  source: ConvertImageWithImageMagickBrowserCall,
) {
  const input =
    ConvertImageWithImageMagickBrowserCallModel.parse(source)
  if (input.explain) {
    return await explainConvertImageWithImageMagick(input)
  } else {
    return await convertBrowserRemote(input)
  }
}
