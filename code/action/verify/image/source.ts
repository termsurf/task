import { Form } from '@termsurf/form'

export const verify_image_with_image_magick: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'image_magick_format' },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}
