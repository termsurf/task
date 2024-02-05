import _ from 'lodash'
import { FileLink, addRemoteFilesToList } from '~/code/tool/shared/file'

// https://www.npmjs.com/package/ftp
export async function bindConvertLocal(input) {
  const through = _.cloneDeep(input)
  const files: Array<FileLink> = []

  if (input.input.file.path) {
    addRemoteFilesToList(files, input.input.file.path, [
      'input',
      'file',
      'path',
    ])
  }

  // if (files.length) {
  //   const fileThrough = await saveAllRemoteFilesLocally(files)
  //   unsetAll(through, [['input', 'file', 'path']])
  //   _.merge(through, fileThrough)
  // }

  return through
}
