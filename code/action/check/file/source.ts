import { Form } from '@termsurf/form'

export const check_file_type_using_magic_bytes: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}
