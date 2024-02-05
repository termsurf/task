import { Form } from '@termsurf/form'

export function defineResponse(like: string): Form {
  return {
    form: 'form',
    link: {
      form: { like: 'string', need: false, fall: 'response' },
      code: { like: 'natural_number', need: false, fall: 200 },
      note: { like: 'string', need: false, fall: 'success' },
      tree: {
        like,
      },
    },
  }
}
