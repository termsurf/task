import { Form } from '@termsurf/form'

export const file_input_path: Form = {
  form: 'form',
  link: {
    path: { like: 'string', name: { mark: 'i' } },
  },
}

export const file_path: Form = {
  form: 'form',
  link: {
    path: { like: 'string' },
  },
}

export const file_output_path: Form = {
  form: 'form',
  link: {
    path: { like: 'string', name: { mark: 'o' } },
  },
}

export const file_content: Form = {
  form: 'form',
  link: {
    content: { like: 'ArrayBuffer' },
  },
}

export const file_has_output_content: Form = {
  form: 'form',
  link: {
    content: { like: 'boolean' },
  },
}
