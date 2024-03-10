import { Form } from '@termsurf/form'

export const parse_ast: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'string', name: { mark: 'I' } },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}
