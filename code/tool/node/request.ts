import { Request } from '../shared/request.js'
import {
  WorkFile,
  requestAndWaitForWorkToComplete,
} from '../shared/work.js'
import { saveRemoteFileNode } from './file.js'

export async function resolveWorkFileNode<T extends WorkFile>(
  request: Request,
  outputPath: string,
  signal?: AbortSignal,
) {
  for await (const data of requestAndWaitForWorkToComplete<T>(
    request,
    signal,
  )) {
    switch (data.type) {
      case 'output':
        await saveRemoteFileNode(
          data.output.file.path,
          outputPath,
          signal,
        )
        break
    }
  }
}
