import { List } from '@termsurf/form'
import {
  buildConvertForms,
  buildConvertFormsWithOutputDirectory,
} from '~/code/tool/shared/source.js'

const convert_document_with_jupyter_forms = buildConvertForms(
  'convert_document_with_jupyter',
  'string',
  'string',
)

export const convert_document_with_jupyter_node_input =
  convert_document_with_jupyter_forms.node_input

export const convert_document_with_jupyter_node_remote_input =
  convert_document_with_jupyter_forms.node_remote_input

export const convert_document_with_jupyter_node_external_input =
  convert_document_with_jupyter_forms.node_external_input

export const convert_document_with_jupyter_node_client_input =
  convert_document_with_jupyter_forms.node_client_input

export const convert_document_with_jupyter_node_local_external_input =
  convert_document_with_jupyter_forms.node_local_external_input

export const convert_document_with_jupyter_node_local_internal_input =
  convert_document_with_jupyter_forms.node_local_internal_input

export const convert_document_with_jupyter_node_local_input =
  convert_document_with_jupyter_forms.node_local_input

export const convert_document_with_jupyter_node_output =
  convert_document_with_jupyter_forms.node_output

export const convert_document_with_jupyter_browser_input =
  convert_document_with_jupyter_forms.browser_input

export const convert_document_with_jupyter_browser_remote_input =
  convert_document_with_jupyter_forms.browser_remote_input

export const convert_document_with_jupyter_browser_local_input =
  convert_document_with_jupyter_forms.browser_local_input

export const convert_document_with_jupyter_browser_output =
  convert_document_with_jupyter_forms.browser_output

const convert_document_with_libre_office_forms =
  buildConvertFormsWithOutputDirectory(
    'convert_document_with_libre_office',
    'libre_office_input_format',
    'libre_office_output_format',
  )

export const convert_document_with_libre_office_node_input =
  convert_document_with_libre_office_forms.node_input

export const convert_document_with_libre_office_node_remote_input =
  convert_document_with_libre_office_forms.node_remote_input

export const convert_document_with_libre_office_node_external_input =
  convert_document_with_libre_office_forms.node_external_input

export const convert_document_with_libre_office_node_client_input =
  convert_document_with_libre_office_forms.node_client_input

export const convert_document_with_libre_office_node_local_external_input =
  convert_document_with_libre_office_forms.node_local_external_input

export const convert_document_with_libre_office_node_local_internal_input =
  convert_document_with_libre_office_forms.node_local_internal_input

export const convert_document_with_libre_office_node_local_input =
  convert_document_with_libre_office_forms.node_local_input

export const convert_document_with_libre_office_node_output =
  convert_document_with_libre_office_forms.node_output

export const convert_document_with_libre_office_browser_input =
  convert_document_with_libre_office_forms.browser_input

export const convert_document_with_libre_office_browser_remote_input =
  convert_document_with_libre_office_forms.browser_remote_input

export const convert_document_with_libre_office_browser_local_input =
  convert_document_with_libre_office_forms.browser_local_input

export const convert_document_with_libre_office_browser_output =
  convert_document_with_libre_office_forms.browser_output

export const pdf_latex_input_format: List = {
  form: 'list',
  list: ['tex'],
}

export const pdf_latex_output_format: List = {
  form: 'list',
  list: ['pdf'],
}

const convert_latex_with_pdf_latex_forms =
  buildConvertFormsWithOutputDirectory(
    'convert_latex_with_pdf_latex',
    'pdf_latex_input_format',
    'pdf_latex_output_format',
  )

export const convert_latex_with_pdf_latex_node_input =
  convert_latex_with_pdf_latex_forms.node_input

export const convert_latex_with_pdf_latex_node_remote_input =
  convert_latex_with_pdf_latex_forms.node_remote_input

export const convert_latex_with_pdf_latex_node_external_input =
  convert_latex_with_pdf_latex_forms.node_external_input

export const convert_latex_with_pdf_latex_node_client_input =
  convert_latex_with_pdf_latex_forms.node_client_input

export const convert_latex_with_pdf_latex_node_local_external_input =
  convert_latex_with_pdf_latex_forms.node_local_external_input

export const convert_latex_with_pdf_latex_node_local_internal_input =
  convert_latex_with_pdf_latex_forms.node_local_internal_input

export const convert_latex_with_pdf_latex_node_local_input =
  convert_latex_with_pdf_latex_forms.node_local_input

export const convert_latex_with_pdf_latex_node_output =
  convert_latex_with_pdf_latex_forms.node_output

export const convert_latex_with_pdf_latex_browser_input =
  convert_latex_with_pdf_latex_forms.browser_input

export const convert_latex_with_pdf_latex_browser_remote_input =
  convert_latex_with_pdf_latex_forms.browser_remote_input

export const convert_latex_with_pdf_latex_browser_local_input =
  convert_latex_with_pdf_latex_forms.browser_local_input

export const convert_latex_with_pdf_latex_browser_output =
  convert_latex_with_pdf_latex_forms.browser_output

export const convert_latex_to_png_input_format: List = {
  form: 'list',
  list: ['tex'],
}

export const convert_latex_to_png_output_format: List = {
  form: 'list',
  list: ['png'],
}

const convert_latex_to_png_forms = buildConvertForms(
  'convert_latex_to_png',
  'convert_latex_to_png_input_format',
  'convert_latex_to_png_output_format',
)

export const convert_latex_to_png_node_input =
  convert_latex_to_png_forms.node_input

export const convert_latex_to_png_node_remote_input =
  convert_latex_to_png_forms.node_remote_input

export const convert_latex_to_png_node_external_input =
  convert_latex_to_png_forms.node_external_input

export const convert_latex_to_png_node_client_input =
  convert_latex_to_png_forms.node_client_input

export const convert_latex_to_png_node_local_external_input =
  convert_latex_to_png_forms.node_local_external_input

export const convert_latex_to_png_node_local_internal_input =
  convert_latex_to_png_forms.node_local_internal_input

export const convert_latex_to_png_node_local_input =
  convert_latex_to_png_forms.node_local_input

export const convert_latex_to_png_node_output =
  convert_latex_to_png_forms.node_output

export const convert_latex_to_png_browser_input =
  convert_latex_to_png_forms.browser_input

export const convert_latex_to_png_browser_remote_input =
  convert_latex_to_png_forms.browser_remote_input

export const convert_latex_to_png_browser_local_input =
  convert_latex_to_png_forms.browser_local_input

export const convert_latex_to_png_browser_output =
  convert_latex_to_png_forms.browser_output

const convert_document_with_calibre_forms = buildConvertForms(
  'convert_document_with_calibre',
  'calibre_input_format',
  'calibre_output_format',
)

export const convert_document_with_calibre_node_input =
  convert_document_with_calibre_forms.node_input

export const convert_document_with_calibre_node_remote_input =
  convert_document_with_calibre_forms.node_remote_input

export const convert_document_with_calibre_node_external_input =
  convert_document_with_calibre_forms.node_external_input

export const convert_document_with_calibre_node_client_input =
  convert_document_with_calibre_forms.node_client_input

export const convert_document_with_calibre_node_local_external_input =
  convert_document_with_calibre_forms.node_local_external_input

export const convert_document_with_calibre_node_local_internal_input =
  convert_document_with_calibre_forms.node_local_internal_input

export const convert_document_with_calibre_node_local_input =
  convert_document_with_calibre_forms.node_local_input

export const convert_document_with_calibre_node_output =
  convert_document_with_calibre_forms.node_output

export const convert_document_with_calibre_browser_input =
  convert_document_with_calibre_forms.browser_input

export const convert_document_with_calibre_browser_remote_input =
  convert_document_with_calibre_forms.browser_remote_input

export const convert_document_with_calibre_browser_local_input =
  convert_document_with_calibre_forms.browser_local_input

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

export const convert_document_with_puppeteer_node_input =
  convert_document_with_puppeteer_forms.node_input

export const convert_document_with_puppeteer_node_remote_input =
  convert_document_with_puppeteer_forms.node_remote_input

export const convert_document_with_puppeteer_node_external_input =
  convert_document_with_puppeteer_forms.node_external_input

export const convert_document_with_puppeteer_node_client_input =
  convert_document_with_puppeteer_forms.node_client_input

export const convert_document_with_puppeteer_node_local_external_input =
  convert_document_with_puppeteer_forms.node_local_external_input

export const convert_document_with_puppeteer_node_local_internal_input =
  convert_document_with_puppeteer_forms.node_local_internal_input

export const convert_document_with_puppeteer_node_local_input =
  convert_document_with_puppeteer_forms.node_local_input

export const convert_document_with_puppeteer_node_output =
  convert_document_with_puppeteer_forms.node_output

export const convert_document_with_puppeteer_browser_input =
  convert_document_with_puppeteer_forms.browser_input

export const convert_document_with_puppeteer_browser_remote_input =
  convert_document_with_puppeteer_forms.browser_remote_input

export const convert_document_with_puppeteer_browser_local_input =
  convert_document_with_puppeteer_forms.browser_local_input

export const convert_document_with_puppeteer_browser_output =
  convert_document_with_puppeteer_forms.browser_output

const convert_document_with_pandoc_forms = buildConvertForms(
  'convert_document_with_pandoc',
  'pandoc_input_format',
  'pandoc_output_format',
)

export const convert_document_with_pandoc_node_input =
  convert_document_with_pandoc_forms.node_input

export const convert_document_with_pandoc_node_remote_input =
  convert_document_with_pandoc_forms.node_remote_input

export const convert_document_with_pandoc_node_external_input =
  convert_document_with_pandoc_forms.node_external_input

export const convert_document_with_pandoc_node_client_input =
  convert_document_with_pandoc_forms.node_client_input

export const convert_document_with_pandoc_node_local_external_input =
  convert_document_with_pandoc_forms.node_local_external_input

export const convert_document_with_pandoc_node_local_internal_input =
  convert_document_with_pandoc_forms.node_local_internal_input

export const convert_document_with_pandoc_node_local_input =
  convert_document_with_pandoc_forms.node_local_input

export const convert_document_with_pandoc_node_output =
  convert_document_with_pandoc_forms.node_output

export const convert_document_with_pandoc_browser_input =
  convert_document_with_pandoc_forms.browser_input

export const convert_document_with_pandoc_browser_remote_input =
  convert_document_with_pandoc_forms.browser_remote_input

export const convert_document_with_pandoc_browser_local_input =
  convert_document_with_pandoc_forms.browser_local_input

export const convert_document_with_pandoc_browser_output =
  convert_document_with_pandoc_forms.browser_output
