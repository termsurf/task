import STYLE_CPP from './style.cpp.type.json' assert { type: 'json' }
import STYLE_JAVA from './style.java.type.json' assert { type: 'json' }
import STYLE_JAVASCRIPT from './style.javascript.type.json' assert { type: 'json' }
import STYLE_OBJC from './style.objc.type.json' assert { type: 'json' }
import STYLE_ALL from './style.all.type.json' assert { type: 'json' }
import { Form } from '@termsurf/form'

export const clang_style_all: Form = {
  form: 'form',
  file: 'clang-format',
  save: true,
  link: STYLE_ALL,
}

export const clang_style_cpp: Form = {
  form: 'form',
  file: 'clang-format',
  save: true,
  base: 'clang_style_all',
  link: STYLE_CPP,
}

export const clang_style_java: Form = {
  form: 'form',
  file: 'clang-format',
  save: true,
  base: 'clang_style_all',
  link: STYLE_JAVA,
}

export const clang_style_javascript: Form = {
  form: 'form',
  file: 'clang-format',
  save: true,
  base: 'clang_style_all',
  link: STYLE_JAVASCRIPT,
}

export const clang_style_objc: Form = {
  form: 'form',
  file: 'clang-format',
  save: true,
  base: 'clang_style_all',
  link: STYLE_OBJC,
}
