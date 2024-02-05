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

export const convert_image_with_image_magick_node_output =
  convert_image_with_image_magick_forms.node_output

export const convert_image_with_image_magick_node_output_response =
  convert_image_with_image_magick_forms.node_output_response

export const convert_image_with_image_magick_node_call =
  convert_image_with_image_magick_forms.node_call

export const convert_image_with_image_magick_node_local_call =
  convert_image_with_image_magick_forms.node_local_call

export const convert_image_with_image_magick_node_command =
  convert_image_with_image_magick_forms.node_command

export const convert_image_with_image_magick_node_remote_call =
  convert_image_with_image_magick_forms.node_remote_call

export const convert_image_with_image_magick_browser_call =
  convert_image_with_image_magick_forms.browser_call

export const convert_image_with_image_magick_browser_output =
  convert_image_with_image_magick_forms.browser_output

// convert_ai_to_svg_with_inkscape_forms

export const convert_ai_to_svg_with_inkscape_forms = buildConvertForms(
  'convert_ai_to_svg_with_inkscape',
  'string',
  'string',
)

export const convert_ai_to_svg_with_inkscape_node_output =
  convert_ai_to_svg_with_inkscape_forms.node_output

export const convert_ai_to_svg_with_inkscape_node_output_response =
  convert_ai_to_svg_with_inkscape_forms.node_output_response

export const convert_ai_to_svg_with_inkscape_node_call =
  convert_ai_to_svg_with_inkscape_forms.node_call

export const convert_ai_to_svg_with_inkscape_node_local_call =
  convert_ai_to_svg_with_inkscape_forms.node_local_call

export const convert_ai_to_svg_with_inkscape_node_command =
  convert_ai_to_svg_with_inkscape_forms.node_command

export const convert_ai_to_svg_with_inkscape_node_remote_call =
  convert_ai_to_svg_with_inkscape_forms.node_remote_call

export const convert_ai_to_svg_with_inkscape_browser_call =
  convert_ai_to_svg_with_inkscape_forms.browser_call

export const convert_ai_to_svg_with_inkscape_browser_output =
  convert_ai_to_svg_with_inkscape_forms.browser_output
