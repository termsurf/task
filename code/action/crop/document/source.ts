import { Form } from '@termsurf/form'

export const crop_pdf_with_pdf_crop: Form = {
  form: 'form',
  link: {
    margin: {
      like: 'natural_number',
      need: false,
    },
    input: {
      link: {
        file: {
          link: {
            path: { like: 'string', name: { mark: 'i' } },
          },
        },
      },
    },
    output: {
      link: {
        file: {
          link: {
            path: { like: 'string', name: { mark: 'o' } },
          },
        },
      },
    },
  },
}
