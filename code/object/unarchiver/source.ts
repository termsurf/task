import { Hash, List } from '@termsurf/form'

export const unarchiver_format: List = {
  form: 'list',
  list: [
    'zip',
    'rar',
    '7z',
    'tar',
    'gzip',
    'bzip2',
    'lzma',
    'cab',
    'msi',
    'nsis',
    'exe',
    'iso',
  ],
}

// https://github.com/ashang/unar/blob/master/README.md
export const unarchiver_format_content: Hash = {
  form: 'hash',
  link: 'unarchiver_format',
  bond: {
    head: { like: 'string' },
  },
  hash: {
    zip: { head: 'Zip' },
    rar: { head: 'RAR' },
    '7z': { head: '7z' },
    tar: { head: 'Tar' },
    gzip: { head: 'Gzip' },
    bzip2: { head: 'Bzip2' },
    lzma: { head: 'LZMA' },
    cab: { head: 'CAB' },
    msi: { head: 'MSI' },
    nsis: { head: 'NSIS' },
    exe: { head: 'EXE' },
    iso: { head: 'ISO' },
  },
}
