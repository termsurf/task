import { Form } from '@termsurf/form'

export const archive_with_rar: Form = {
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

export const archive_with_zip: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        path: { like: 'string', name: { mark: 'i' } },
      },
    },
    output: {
      link: {
        format: { like: 'string', name: { mark: 'O' } },
        file: {
          link: { path: { like: 'string', name: { mark: 'o' } } },
        },
      },
    },
  },
}
