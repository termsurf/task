import { Form } from '@termsurf/form'

export const convert_image_with_image_magick: Form = {
  form: 'form',
  link: {
    surf: { like: 'boolean', name: { mark: 'S' } },
    work: { like: 'boolean', name: { mark: 'W' } },
    note: { like: 'boolean', name: { mark: 'N' } },
    input: {
      link: {
        format: { like: 'string', name: { mark: 'I' } },
        file: {
          link: {
            path: { like: 'string', name: { mark: 'i' } },
          },
        },
      },
    },
    output: {
      link: {
        format: { like: 'string', name: { mark: 'O' } },
        file: {
          link: {
            path: { like: 'string', name: { mark: 'o' } },
          },
        },
      },
    },
    colorCount: { like: 'natural_number', need: false },
    colorMatrix: {
      like: 'image_magic_color_matrix',
      test: 'test_image_magic_color_matrix',
      need: false,
    },
    colorSpace: { like: 'image_magick_color_space', need: false },
    compare: { like: 'boolean', need: false },
    compression: { like: 'image_magick_compression', need: false },
  },
}

export const convert_ai_to_svg_with_inkscape: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        file: {
          link: {
            path: { like: 'string', need: false },
          },
        },
      },
    },
    output: {
      link: {
        file: {
          link: {
            path: { like: 'string' },
            format: { like: 'string' },
          },
        },
      },
    },
  },
}
