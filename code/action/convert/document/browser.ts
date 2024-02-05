import {
  ConvertDocumentWithPandocBrowserInput,
  ConvertDocumentWithPandocBrowserInputModel,
} from '~/code/type/index.js'

export async function convertDocumentWithPandocBrowser(
  source: ConvertDocumentWithPandocBrowserInput,
) {
  const input = ConvertDocumentWithPandocBrowserInputModel.parse(source)
  return await convertBrowserRemote(input)
}
