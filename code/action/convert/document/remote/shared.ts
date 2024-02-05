import { buildRemoteRequest } from '~/code/tool/shared/request.js'

export function buildRequestToConvertDocumentWithPandoc(input) {
  return buildRemoteRequest(`/convert`, input)
}
