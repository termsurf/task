import { Request } from '../shared/request.js'
import {
  WorkFile,
  requestAndWaitForWorkToComplete,
} from '../shared/work.js'
import { saveRemoteFileNode } from './file.js'

export async function resolveWorkFileNode<T extends WorkFile>(
  request: Request,
  outputPath: string,
) {
  const controller = new AbortController()
  const output = await requestAndWaitForWorkToComplete<T>(
    request,
    controller,
  )
  await saveRemoteFileNode(output.file.path, outputPath, controller)
}
