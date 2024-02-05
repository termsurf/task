import { Form, List } from '@termsurf/form'

export const objdump_demangle_style: List = {
  form: 'list',
  list: ['none', 'auto', 'gnu-v3', 'java', 'gnat', 'dlang', 'rust'],
}

export const objdump_show_option: List = {
  form: 'list',
  list: [
    'archive_header',
    'debugging_info',
    'section_header_summary',
    'source_code',
    'all_header',
  ],
}

export const objdump_hide_option: List = {
  form: 'list',
  list: ['address', 'instruction_byte'],
}

export const disassemble_binary_with_objdump: Form = {
  form: 'form',
  link: {
    show: { like: 'objdump_show_option', list: true },
    demangleStyle: { like: 'objdump_demangle_style' },
    disassembleAll: { like: 'boolean' },
    hide: { like: 'objdump_hide_option' },
    color: { like: 'boolean' },
  },
}
