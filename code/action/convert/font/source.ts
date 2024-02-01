import { Form } from '@termsurf/form'

export const convert_font_with_font_forge: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'font_format', name: { mark: 'I' } },
        file: {
          link: {
            path: { like: 'string', name: { mark: 'i' } },
          },
        },
      },
    },
    output: {
      link: {
        format: { like: 'font_format', name: { mark: 'O' } },
        file: {
          link: {
            path: { like: 'string', name: { mark: 'o' } },
          },
        },
      },
    },
  },
}
