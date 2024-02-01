import { Form, List } from '@termsurf/form'

export const flip: List = {
  form: 'list',
  list: ['horizontal', 'vertical'],
}

export const gifsicle_optimize_option: List = {
  form: 'list',
  list: ['1', '2', '3'],
}

export const build_command_to_optimize_gif_with_gifsicle: Form = {
  form: 'form',
  link: {
    lossy: { like: 'natural_number', need: false },
    background: { like: 'string', need: false },
    left: { like: 'integer', need: false },
    right: { like: 'integer', need: false },
    top: { like: 'integer', need: false },
    bottom: { like: 'integer', need: false },
    flip: { like: 'flip', need: false },
    transparent: { like: 'string', need: false },
    optimize: { like: 'gifsicle_optimize_option', need: false },
    scale: { like: 'decimal', need: false },
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
