import {
  buildConvertForms,
  buildConvertFormsWithOutputDirectory,
} from '~/code/tool/shared/source.js'

const convert_document_with_jupyter_forms = buildConvertForms(
  'convert_document_with_jupyter',
  'string',
  'string',
)

export const convert_document_with_jupyter_node_output =
  convert_document_with_jupyter_forms.node_output

export const convert_document_with_jupyter_node_output_response =
  convert_document_with_jupyter_forms.node_output_response

export const convert_document_with_jupyter_node_input =
  convert_document_with_jupyter_forms.node_input

export const convert_document_with_jupyter_node_command_input =
  convert_document_with_jupyter_forms.node_command_input

export const convert_document_with_jupyter_node_remote_input =
  convert_document_with_jupyter_forms.node_remote_input

export const convert_document_with_jupyter_browser_input =
  convert_document_with_jupyter_forms.browser_input

export const convert_document_with_jupyter_browser_output =
  convert_document_with_jupyter_forms.browser_output

const convert_document_with_libre_office_forms =
  buildConvertFormsWithOutputDirectory(
    'convert_document_with_libre_office',
    'libre_office_input_format',
    'libre_office_output_format',
  )

export const convert_document_with_libre_office_node_output =
  convert_document_with_libre_office_forms.node_output

export const convert_document_with_libre_office_node_output_response =
  convert_document_with_libre_office_forms.node_output_response

export const convert_document_with_libre_office_node_input =
  convert_document_with_libre_office_forms.node_input

export const convert_document_with_libre_office_node_command_input =
  convert_document_with_libre_office_forms.node_command_input

export const convert_document_with_libre_office_node_remote_input =
  convert_document_with_libre_office_forms.node_remote_input

export const convert_document_with_libre_office_browser_input =
  convert_document_with_libre_office_forms.browser_input

export const convert_document_with_libre_office_browser_output =
  convert_document_with_libre_office_forms.browser_output

const convert_latex_to_pdf_with_pdf_latex_forms =
  buildConvertFormsWithOutputDirectory(
    'convert_latex_to_pdf_with_pdf_latex',
    'string',
    'string',
  )

export const convert_latex_to_pdf_with_pdf_latex_node_output =
  convert_latex_to_pdf_with_pdf_latex_forms.node_output

export const convert_latex_to_pdf_with_pdf_latex_node_output_response =
  convert_latex_to_pdf_with_pdf_latex_forms.node_output_response

export const convert_latex_to_pdf_with_pdf_latex_node_input =
  convert_latex_to_pdf_with_pdf_latex_forms.node_input

export const convert_latex_to_pdf_with_pdf_latex_node_command_input =
  convert_latex_to_pdf_with_pdf_latex_forms.node_command_input

export const convert_latex_to_pdf_with_pdf_latex_node_remote_input =
  convert_latex_to_pdf_with_pdf_latex_forms.node_remote_input

export const convert_latex_to_pdf_with_pdf_latex_browser_input =
  convert_latex_to_pdf_with_pdf_latex_forms.browser_input

export const convert_latex_to_pdf_with_pdf_latex_browser_output =
  convert_latex_to_pdf_with_pdf_latex_forms.browser_output

const convert_document_with_calibre_forms = buildConvertForms(
  'convert_document_with_calibre',
  'calibre_input_format',
  'calibre_output_format',
)

export const convert_document_with_calibre_node_output =
  convert_document_with_calibre_forms.node_output

export const convert_document_with_calibre_node_output_response =
  convert_document_with_calibre_forms.node_output_response

export const convert_document_with_calibre_node_input =
  convert_document_with_calibre_forms.node_input

export const convert_document_with_calibre_node_command_input =
  convert_document_with_calibre_forms.node_command_input

export const convert_document_with_calibre_node_remote_input =
  convert_document_with_calibre_forms.node_remote_input

export const convert_document_with_calibre_browser_input =
  convert_document_with_calibre_forms.browser_input

export const convert_document_with_calibre_browser_output =
  convert_document_with_calibre_forms.browser_output

const convert_document_with_puppeteer_forms = buildConvertForms(
  'convert_document_with_puppeteer',
  'puppeteer_input_format',
  'puppeteer_output_format',
  {
    viewport: {
      link: {
        width: { like: 'natural_number', need: false },
        height: { like: 'natural_number', need: false },
      },
    },
    proxy: { like: 'string', need: false },
    waitUntil: { like: 'puppeteer_life_cycle_event', need: false },
  },
)

export const convert_document_with_puppeteer_node_output =
  convert_document_with_puppeteer_forms.node_output

export const convert_document_with_puppeteer_node_output_response =
  convert_document_with_puppeteer_forms.node_output_response

export const convert_document_with_puppeteer_node_input =
  convert_document_with_puppeteer_forms.node_input

export const convert_document_with_puppeteer_node_command_input =
  convert_document_with_puppeteer_forms.node_command_input

export const convert_document_with_puppeteer_node_remote_input =
  convert_document_with_puppeteer_forms.node_remote_input

export const convert_document_with_puppeteer_browser_input =
  convert_document_with_puppeteer_forms.browser_input

export const convert_document_with_puppeteer_browser_output =
  convert_document_with_puppeteer_forms.browser_output

const convert_document_with_pandoc_forms = buildConvertForms(
  'convert_document_with_pandoc',
  'pandoc_input_format',
  'pandoc_output_format',
)

export const convert_document_with_pandoc_node_output =
  convert_document_with_pandoc_forms.node_output

export const convert_document_with_pandoc_node_output_response =
  convert_document_with_pandoc_forms.node_output_response

export const convert_document_with_pandoc_node_input =
  convert_document_with_pandoc_forms.node_input

export const convert_document_with_pandoc_node_command_input =
  convert_document_with_pandoc_forms.node_command_input

export const convert_document_with_pandoc_node_remote_input =
  convert_document_with_pandoc_forms.node_remote_input

export const convert_document_with_pandoc_browser_input =
  convert_document_with_pandoc_forms.browser_input

export const convert_document_with_pandoc_browser_output =
  convert_document_with_pandoc_forms.browser_output
