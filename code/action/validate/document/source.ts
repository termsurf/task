import { Form } from '@termsurf/form'

export const validate_pdf_with_data: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'string', name: { mark: 'I' } },
        file: {
          link: {
            data: { like: 'ArrayBuffer' },
          },
        },
      },
    },
  },
}
