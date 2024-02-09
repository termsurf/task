import { Form, List, Test } from '@termsurf/form'

export const qr_code_error_correction_level: List = {
  form: 'list',
  list: ['L', 'M', 'Q', 'H'],
}

export const qr_code_format: List = {
  form: 'list',
  list: ['png', 'jpg', 'webp'],
}

export const generate_qr_code: Form = {
  form: 'form',
  link: {
    errorCorrectionLevel: { like: 'qr_code_error_correction_level' },
    format: { like: 'qr_code_format' },
    // type: 'image/png',
    // quality: 0.3,
    margin: { like: 'natural_number' },
    color: {
      need: false,
      link: {
        dark: { like: 'string', test: 'is_hex_color_8' },
        light: { like: 'string', test: 'is_hex_color_8' },
      },
    },
  },
}
