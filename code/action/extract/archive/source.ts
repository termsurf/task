import { Form } from '@termsurf/form'

export const decompress_with_7z: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'string', name: { mark: 'I' } },
        path: { like: 'string' },
      },
    },
    output: {
      link: {
        format: { like: 'string', name: { mark: 'O' } },
        file: {
          link: { path: { like: 'string' } },
        },
      },
    },
  },
}

export const decompress_with_unarchiver: Form = {
  form: 'form',
  link: {
    output: {
      link: {
        overwrite: {
          like: 'boolean',
          fall: false,
          need: false,
          name: { mark: 'w' },
        },
        directory: {
          link: {
            path: { like: 'string', name: { mark: 'o' } },
          },
        },
      },
    },
    input: {
      link: {
        password: { like: 'string', need: false },
        format: { like: 'string', name: { mark: 'I' } },
        file: {
          link: { path: { like: 'string', name: { mark: 'i' } } },
        },
      },
    },
  },
}
