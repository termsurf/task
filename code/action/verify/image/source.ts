import { Form } from '@termsurf/form'

export const verify_image_with_image_magick: Form = {
  form: 'form',
  link: {
    format: { like: 'image_magick_format', name: { mark: 'I' } },
    file: {
      link: {
        path: { like: 'string', name: { mark: 'i' } },
      },
    },
  },
}
