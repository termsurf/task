import { Form } from '@termsurf/form'

export const convert_document_with_jupyter: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'string', name: { mark: 'I' } },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
    output: {
      link: {
        format: { like: 'string', name: { mark: 'O' } },
        file: {
          link: {
            format: { like: 'string' },
          },
        },
      },
    },
  },
}

export const convert_document_with_libre_office: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: {
          like: 'libre_office_input_format',
          name: { mark: 'I' },
        },
        file: {
          link: {
            path: { like: 'string', name: { mark: 'i' } },
          },
        },
      },
    },
    output: {
      link: {
        format: {
          like: 'libre_office_output_format',
          name: { mark: 'O' },
        },
        directory: {
          link: {
            path: { like: 'string', name: { mark: 'b' } },
          },
        },
      },
    },
  },
}

export const convert_latex_to_pdf_with_pdf_latex: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'string', name: { mark: 'I' } },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
    output: {
      link: {
        directory: {
          link: {
            path: { like: 'string' },
          },
        },
        file: {
          link: {
            name: { like: 'string' },
          },
        },
      },
    },
  },
}

export const convert_document_with_calibre: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'calibre_input_format', name: { mark: 'I' } },
        file: {
          link: {
            path: { like: 'string', name: { mark: 'i' } },
          },
        },
      },
    },
    output: {
      link: {
        format: { like: 'calibre_output_format', name: { mark: 'O' } },
        file: {
          link: {
            path: { like: 'string', name: { mark: 'o' } },
          },
        },
      },
    },
  },
}

export const convert_html_to_pdf_with_puppeteer: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'string', name: { mark: 'I' } },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
    output: {
      link: {
        format: { like: 'string', name: { mark: 'O' } },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
    viewport: {
      link: {
        width: { like: 'natural_number', need: false },
        height: { like: 'natural_number', need: false },
      },
    },
    proxy: { like: 'string', need: false },
    waitUntil: { like: 'puppeteer_life_cycle_event', need: false },
  },
}

export const convert_html_to_png_with_puppeteer: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'string', name: { mark: 'I' } },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
    output: {
      link: {
        format: { like: 'string', name: { mark: 'O' } },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
    viewport: {
      link: {
        width: { like: 'natural_number', need: false },
        height: { like: 'natural_number', need: false },
      },
    },
    proxy: { like: 'string', need: false },
    waitUntil: { like: 'puppeteer_life_cycle_event', need: false },
  },
}

export const convert_document_with_pandoc: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'pandoc_input_format', name: { mark: 'I' } },
        file: {
          link: {
            path: { like: 'string', name: { mark: 'i' } },
          },
        },
      },
    },
    output: {
      link: {
        file: {
          link: {
            path: { like: 'string', name: { mark: 'o' } },
          },
        },
        format: {
          like: 'pandoc_output_format',
          name: { mark: 'O' },
        },
      },
    },
  },
}
