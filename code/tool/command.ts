import kink from './kink.js'

export const COMMAND_NAME = [
  'ffmpeg',
  'black',
  'asmfmt',
  'ktfmt',
  'convert',
  'pandoc',
  'java',
  'clang++',
  'clang',
  'llc',
  'clang-format',
  'swift-format',
  'swiftc',
  'fontforge',
  'mogrify',
  '7z',
  'inkscape',
  'unar',
  'rar',
  'pdflatex',
  'objdump',
  'rustc',
  'rustfmt',
  'rubocop',
  'shfmt',
  'zip',
  'tar',
  'exiftool',
  'ebook-convert',
  'soffice',
  'jupyter',
  'docx2pdf',
  'unoconv',
  'gifsicle',
  'patool',
  'identify',
  'perltidy',
] as const

export type CommandName = (typeof COMMAND_NAME)[number]

export const COMMAND: Record<CommandName, Array<string> | undefined> = {
  ffmpeg: ['ffmpeg'],
  perltidy: ['perltidy'],
  black: ['black'],
  asmfmt: ['asmfmt'],
  ktfmt: ['ktfmt'], // kotlin format
  convert: ['convert'],
  pandoc: ['pandoc'],
  java: ['java'],
  'clang++': ['clang++'],
  clang: ['clang'],
  llc: ['lcc'],
  'clang-format': ['clang-format'],
  'swift-format': ['swift-format'],
  swiftc: ['swiftc'],
  fontforge: ['fontforge'],
  mogrify: ['mogrify'],
  '7z': ['7z'],
  inkscape: ['inkscape'],
  unar: ['unar'],
  rar: ['rar'],
  pdflatex: ['pdflatex'],
  objdump: ['objdump'],
  rustc: ['rustc'],
  rustfmt: ['rustfmt'],
  gifsicle: ['gifsicle'],
  identify: ['identify'],
  rubocop: ['rubocop'],
  shfmt: ['shfmt'],
  zip: ['zip'],
  tar: ['tar'],
  exiftool: ['exiftool'],
  'ebook-convert': ['ebook-convert'],
  soffice: ['soffice'],
  jupyter: ['jupyter'],
  docx2pdf: process.platform.match(/win32|darwin/)
    ? ['docx2pdf']
    : undefined,
  unoconv: ['unoconv'],
  patool: ['patool'],
}

export function getCommand(name: CommandName): Command {
  const cmd = COMMAND[name]
  if (!cmd) {
    throw kink('command_missing', { name })
  }
  return { form: 'command', name: name, link: [...cmd] }
}

export function setCommand(
  name: CommandName,
  bond: Array<string> | undefined,
) {
  COMMAND[name] = bond
}

export type Command = {
  form: 'command'
  name: CommandName
  link: CommandCall
}
export type CommandCall = Array<string>
export type CommandList = Array<Command>

// php-cs-fixer fix test/file/code/quicksort/quicksort.php
