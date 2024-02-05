import {
  buildConvertForms,
  buildConvertFormsWithOutputDirectory,
} from '~/code/tool/shared/source'

const convert_document_with_jupyter_forms = buildConvertForms(
  'convert_document_with_jupyter',
  'string',
  'string',
)

export const convert_document_with_jupyter_output =
  convert_document_with_jupyter_forms.output

export const convert_document_with_jupyter_response =
  convert_document_with_jupyter_forms.response

export const convert_document_with_jupyter =
  convert_document_with_jupyter_forms.call

export const convert_document_with_jupyter_local =
  convert_document_with_jupyter_forms.local

export const build_command_to_convert_document_with_jupyter =
  convert_document_with_jupyter_forms.command

export const convert_document_with_jupyter_remote =
  convert_document_with_jupyter_forms.remote

const convert_document_with_libre_office_forms =
  buildConvertFormsWithOutputDirectory(
    'convert_document_with_libre_office',
    'libre_office_input_format',
    'libre_office_output_format',
  )

export const convert_document_with_libre_office_output =
  convert_document_with_libre_office_forms.output

export const convert_document_with_libre_office_response =
  convert_document_with_libre_office_forms.response

export const convert_document_with_libre_office =
  convert_document_with_libre_office_forms.call

export const convert_document_with_libre_office_local =
  convert_document_with_libre_office_forms.local

export const build_command_to_convert_document_with_libre_office =
  convert_document_with_libre_office_forms.command

export const convert_document_with_libre_office_remote =
  convert_document_with_libre_office_forms.remote

const convert_latex_to_pdf_with_pdf_latex_forms =
  buildConvertFormsWithOutputDirectory(
    'convert_latex_to_pdf_with_pdf_latex',
    'string',
    'string',
  )

export const convert_latex_to_pdf_with_pdf_latex_output =
  convert_latex_to_pdf_with_pdf_latex_forms.output

export const convert_latex_to_pdf_with_pdf_latex_response =
  convert_latex_to_pdf_with_pdf_latex_forms.response

export const convert_latex_to_pdf_with_pdf_latex =
  convert_latex_to_pdf_with_pdf_latex_forms.call

export const convert_latex_to_pdf_with_pdf_latex_local =
  convert_latex_to_pdf_with_pdf_latex_forms.local

export const build_command_to_convert_latex_to_pdf_with_pdf_latex =
  convert_latex_to_pdf_with_pdf_latex_forms.command

export const convert_latex_to_pdf_with_pdf_latex_remote =
  convert_latex_to_pdf_with_pdf_latex_forms.remote

const convert_document_with_calibre_forms = buildConvertForms(
  'convert_document_with_calibre',
  'calibre_input_format',
  'calibre_output_format',
)

export const convert_document_with_calibre_output =
  convert_document_with_calibre_forms.output

export const convert_document_with_calibre_response =
  convert_document_with_calibre_forms.response

export const convert_document_with_calibre =
  convert_document_with_calibre_forms.call

export const convert_document_with_calibre_local =
  convert_document_with_calibre_forms.local

export const build_command_to_convert_document_with_calibre =
  convert_document_with_calibre_forms.command

export const convert_document_with_calibre_remote =
  convert_document_with_calibre_forms.remote

export const convert_document_with_puppeteer_forms = buildConvertForms(
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

export const convert_document_with_puppeteer_output =
  convert_document_with_puppeteer_forms.output

export const convert_document_with_puppeteer_response =
  convert_document_with_puppeteer_forms.response

export const convert_document_with_puppeteer =
  convert_document_with_puppeteer_forms.call

export const convert_document_with_puppeteer_local =
  convert_document_with_puppeteer_forms.local

export const build_command_to_convert_document_with_puppeteer =
  convert_document_with_puppeteer_forms.command

export const convert_document_with_puppeteer_remote =
  convert_document_with_puppeteer_forms.remote

export const convert_document_with_pandoc_forms = buildConvertForms(
  'convert_document_with_pandoc',
  'pandoc_input_format',
  'pandoc_output_format',
)

export const convert_document_with_pandoc_output =
  convert_document_with_pandoc_forms.output

export const convert_document_with_pandoc_response =
  convert_document_with_pandoc_forms.response

export const convert_document_with_pandoc =
  convert_document_with_pandoc_forms.call

export const convert_document_with_pandoc_local =
  convert_document_with_pandoc_forms.local

export const build_command_to_convert_document_with_pandoc =
  convert_document_with_pandoc_forms.command

export const convert_document_with_pandoc_remote =
  convert_document_with_pandoc_forms.remote
