import { Form } from '@termsurf/form'

export const convert_archive_with_unarchiver: Form = {
  form: 'form',
  link: {
    temporary: {
      link: {
        directory: {
          link: {
            path: { like: 'string', name: { mark: 'm' } },
          },
        },
      },
    },
    input: {
      link: {
        format: { like: 'unarchiver_format', name: { mark: 'I' } },
        file: {
          link: { path: { like: 'string' } },
        },
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
