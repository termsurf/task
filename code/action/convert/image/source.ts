import { Form } from '@termsurf/form'
import { buildConvertForms } from '../../../tool/shared/source'

// convert_image_with_image_magick_forms

const convert_image_with_image_magick_forms = buildConvertForms(
  'convert_image_with_image_magick',
  'image_magick_input_format',
  'image_magick_output_format',
  {
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
)

export const convert_image_with_image_magick_output =
  convert_image_with_image_magick_forms.output

export const convert_image_with_image_magick_response =
  convert_image_with_image_magick_forms.response

export const convert_image_with_image_magick =
  convert_image_with_image_magick_forms.call

export const convert_image_with_image_magick_local =
  convert_image_with_image_magick_forms.local

export const build_command_to_convert_image_with_image_magick =
  convert_image_with_image_magick_forms.command

export const convert_image_with_image_magick_remote =
  convert_image_with_image_magick_forms.remote

// convert_ai_to_svg_with_inkscape_forms

export const convert_ai_to_svg_with_inkscape_forms = buildConvertForms(
  'convert_ai_to_svg_with_inkscape',
  'string',
  'string',
)

export const convert_ai_to_svg_with_inkscape_output =
  convert_ai_to_svg_with_inkscape_forms.output

export const convert_ai_to_svg_with_inkscape_response =
  convert_ai_to_svg_with_inkscape_forms.response

export const convert_ai_to_svg_with_inkscape =
  convert_ai_to_svg_with_inkscape_forms.call

export const convert_ai_to_svg_with_inkscape_local =
  convert_ai_to_svg_with_inkscape_forms.local

export const build_command_to_convert_ai_to_svg_with_inkscape =
  convert_ai_to_svg_with_inkscape_forms.command

export const convert_ai_to_svg_with_inkscape_remote =
  convert_ai_to_svg_with_inkscape_forms.remote
