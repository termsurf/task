import { Form } from '@termsurf/form'
import { defineResponse } from '~/code/tool/shared/type.js'

export const command_name = {
  form: 'list',
  list: [
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
  ],
}

export const command_key = {
  form: 'list',
  list: command_name.list.slice(0),
}

export const command: Form = {
  form: 'form',
  link: {
    name: { like: 'command_name' },
    key: { like: 'command_key' },
    link: { like: 'string', list: true },
  },
}

export const command_sequence: Form = {
  form: 'form',
  link: {
    call: { like: 'command', list: true },
  },
}

export const command_sequence_output =
  defineResponse('command_sequence')

export const request: Form = {
  form: 'form',
  link: {
    path: { like: 'string' },
    body: { like: 'json' },
  },
}

export const request_output = defineResponse('request')

export const response: Form = {
  form: 'form',
  link: {
    form: { like: 'string', need: false, fall: 'response' },
    code: { like: 'natural_number', need: false, fall: 200 },
    note: { like: 'string', need: false, fall: 'success' },
    tree: { like: 'json' },
  },
}
