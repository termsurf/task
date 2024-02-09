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

export const remote_path: Form = {
  form: 'form',
  link: {
    path: { like: 'string', test: 'is_remote_path' },
  },
}

export const local_path: Form = {
  form: 'form',
  link: {
    path: { like: 'string', test: 'is_local_path' },
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
    content: {
      case: [
        { like: 'array_buffer' },
        { like: 'blob' },
        { like: 'string' },
      ],
    },
  },
}

export const file_content_with_sha256: Form = {
  form: 'form',
  link: {
    sha256: { like: 'string', test: 'is_sha256' },
    content: {
      case: [
        { like: 'array_buffer' },
        { like: 'blob' },
        { like: 'string' },
      ],
    },
  },
}

export const file_has_output_content: Form = {
  form: 'form',
  link: {
    content: { like: 'boolean' },
  },
}
