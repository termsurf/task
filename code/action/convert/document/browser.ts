import {
  ConvertDocumentWithPandocBrowserCall,
  ConvertDocumentWithPandocBrowserCallModel,
} from '~/code/type/index.js'
import { explainConvertDocumentWithPandoc } from './shared.js'
import { convertBrowserRemote } from '../browser.js'

export async function convertDocumentWithPandocBrowser(
  source: ConvertDocumentWithPandocBrowserCall,
) {
  const input = ConvertDocumentWithPandocBrowserCallModel.parse(source)
  if (input.explain) {
    return await explainConvertDocumentWithPandoc(input)
  } else {
    return await convertBrowserRemote(input)
  }
}
