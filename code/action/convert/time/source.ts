import { Form } from '@termsurf/form'

export const convert_time_zone: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        date: { like: 'string', name: { mark: 'i' } },
      },
    },
    output: {
      link: {
        timezone: { like: 'time_zone', name: { mark: 'O' } },
        format: { like: 'string', name: { mark: 'T' } },
      },
    },
  },
}
