import { getCommand } from '~/code/tool/shared/command'
import {
  ArchiveWithRar,
  ArchiveWithZip,
  ConvertArchiveWithUnarchiver,
} from '~/code/type/index'

// https://superuser.com/questions/190053/universal-command-line-unarchiving-tool-on-a-mac
// atool
// .tar.gz, .tgz, .tar.bz, .tbz, .tar.bz2, .tbz2, .tar.Z, .tZ, .tar.lzo, .tzo, .tar.lz, .tlz, .tar.xz, .txz, .tar.7z, .t7z, .tar, .zip, .jar, .war, .rar, .lha, .lzh, .7z, .alz, .ace, .a, .arj, .arc, .rpm, .deb, .cab, .gz, .bz, .bz2, .gz, .bz, .bz2, .Z, .lzma, .lzo, .lz, .xz, .rz, .lrz, .7z, .cpio
// https://linux.die.net/man/1/apack

export function buildCommandToArchiveWithZip(input: ArchiveWithZip) {
  const cmd = getCommand(`zip`)
  cmd.link.push('-r', input.output.file.path, input.input.path)
  return [cmd]
}

export function buildCommandToArchiveWithRar(input: ArchiveWithRar) {
  // doesn't work on mac.
  const cmd = getCommand(`rar`)
  cmd.link.push(
    `a`,
    `"${input.output.file.path}"`,
    `"${input.input.path}"`,
  )
  return [cmd]
}

export function buildCommandToConvertArchive(
  input: ConvertArchiveWithUnarchiver,
) {
  const decompressInput = {
    input: {
      format: input.input.format,
      file: {
        path: input.input.file.path,
      },
    },
    output: {
      directory: input.temporary.directory,
    },
  }
  const compressInput = {
    input: {
      path: input.temporary.directory.path,
    },
    output: {
      format: input.output.format,
      file: input.output.file,
    },
  }
  return [...buildCommandToArchiveWithZip(compressInput)]
}
