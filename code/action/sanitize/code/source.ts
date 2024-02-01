import { Form } from '@termsurf/form'

export const sanitize_html_from_content: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'string', name: { mark: 'I' } },
        content: { like: 'string' },
      },
    },
  },
}
