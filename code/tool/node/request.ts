import { getConfig } from '../shared/config.js'
import kink from '../shared/kink.js'
import { getRemote, postRemote } from '../shared/request.js'
import { wait } from '../shared/timer.js'
import { saveRemoteFile } from './file.js'

export async function resolveWorkFile(
  request: any,
  outputPath: string,
) {
  const workResponse = await postRemote(request)
  const work = await workResponse.json()
  while (true) {
    await wait(1000)
    const stepResponse = await getRemote(`/work/${work.id}`)
    const step = await stepResponse.json()
    if (step.status === 'ready') {
      const remote = getConfig('remote')
      await saveRemoteFile(`${remote}/file/${step.fileId}`, outputPath)
      return
    } else if (step.status === 'error') {
      throw kink(step.key, step.link)
    }
  }
}
