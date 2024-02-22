import { ARCHIVE_FORMAT, ArchiveFormat } from '../../browser'
import { testConvertInputOutput } from '../shared'

export function testConvertArchive(input: any) {
  if (!testConvertInputOutput(input)) {
    return false
  }

  const {
    input: { format: a },
    output: { format: b },
  } = input

  if (a === b) {
    return false
  }
  if (!ARCHIVE_FORMAT.includes(a as ArchiveFormat)) {
    return false
  }
  if (!ARCHIVE_FORMAT.includes(b as ArchiveFormat)) {
    return false
  }
  return true
}
