import { Form, FormLinkMesh } from '@termsurf/form'
import { defineResponse } from '~/code/tool/shared/type'

export function buildConvertForms(
  name: string,
  i: string,
  o: string,
  common: FormLinkMesh = {},
) {
  const baseCommon: FormLinkMesh = {
    pathScope: {
      like: 'string',
      need: false,
      note: `This is used from the UI to scope file paths to a specific folder.`,
    },
  }

  const output: Form = {
    form: 'form',
    link: {
      output: {
        link: {
          file: {
            case: [{ like: 'file_path' }, { like: 'file_content' }],
          },
        },
      },
    },
  }

  const response = defineResponse(`${name}_output`)

  const call: Form = {
    form: 'form',
    link: {
      remote: { like: 'boolean', name: { mark: 'R' } },
      async: { like: 'boolean', name: { mark: 'A' } },
      explain: { like: 'boolean', name: { mark: 'E' } },
      input: {
        link: {
          format: { like: i, name: { mark: 'I' } },
          file: {
            case: [
              { like: 'file_input_path' },
              { like: 'file_content' },
            ],
          },
        },
      },
      output: {
        link: {
          format: { like: o, name: { mark: 'O' } },
          file: {
            case: [
              { like: 'file_output_path' },
              { like: 'file_has_output_content' },
            ],
          },
        },
      },
      ...baseCommon,
      ...common,
    },
  }

  const local: Form = {
    form: 'form',
    link: {
      async: { like: 'boolean' },
      explain: { like: 'boolean' },
      input: {
        link: {
          format: { like: i },
          file: {
            link: {
              path: { like: 'string' },
            },
          },
        },
      },
      output: {
        link: {
          format: { like: o },
          file: {
            case: [
              { like: 'file_output_path' },
              { like: 'file_has_output_content' },
            ],
          },
        },
      },
      ...baseCommon,
      ...common,
    },
  }

  const command: Form = {
    form: 'form',
    link: {
      async: { like: 'boolean' },
      explain: { like: 'boolean' },
      input: {
        link: {
          format: { like: i },
          file: {
            link: {
              path: { like: 'string' },
            },
          },
        },
      },
      output: {
        link: {
          format: { like: o },
          file: { like: 'file_output_path' },
        },
      },
      ...baseCommon,
      ...common,
    },
  }

  const remote: Form = {
    form: 'form',
    link: {
      async: { like: 'boolean' },
      explain: { like: 'boolean' },
      input: {
        link: {
          format: { like: i },
          file: { like: 'file_content' },
        },
      },
      output: {
        link: {
          format: { like: o },
        },
      },
      ...baseCommon,
      ...common,
    },
  }

  return {
    output,
    response,
    common,
    call,
    local,
    command,
    remote,
  }
}

export function buildConvertFormsWithOutputDirectory(
  name: string,
  i: string,
  o: string,
  common: FormLinkMesh = {},
) {
  const baseCommon: FormLinkMesh = {
    pathScope: {
      like: 'string',
      need: false,
      note: `This is used from the UI to scope file paths to a specific folder.`,
    },
  }

  const output: Form = {
    form: 'form',
    link: {
      output: {
        link: {
          file: {
            case: [{ like: 'file_path' }, { like: 'file_content' }],
          },
        },
      },
    },
  }

  const response = defineResponse(`${name}_output`)

  const call: Form = {
    form: 'form',
    link: {
      remote: { like: 'boolean', name: { mark: 'R' } },
      async: { like: 'boolean', name: { mark: 'A' } },
      explain: { like: 'boolean', name: { mark: 'E' } },
      input: {
        link: {
          format: { like: i, name: { mark: 'I' } },
          file: {
            case: [
              { like: 'file_input_path' },
              { like: 'file_content' },
            ],
          },
        },
      },
      output: {
        link: {
          format: { like: o, name: { mark: 'O' } },
          directory: { like: 'file_output_path', name: { mark: 'o' } },
        },
      },
      ...baseCommon,
      ...common,
    },
  }

  const local: Form = {
    form: 'form',
    link: {
      async: { like: 'boolean' },
      explain: { like: 'boolean' },
      input: {
        link: {
          format: { like: i },
          file: {
            link: {
              path: { like: 'string' },
            },
          },
        },
      },
      output: {
        link: {
          format: { like: o },
          directory: { like: 'file_output_path', name: { mark: 'o' } },
        },
      },
      ...baseCommon,
      ...common,
    },
  }

  const command: Form = {
    form: 'form',
    link: {
      async: { like: 'boolean' },
      explain: { like: 'boolean' },
      input: {
        link: {
          format: { like: i },
          file: {
            link: {
              path: { like: 'string' },
            },
          },
        },
      },
      output: {
        link: {
          format: { like: o },
          directory: { like: 'file_output_path', name: { mark: 'o' } },
        },
      },
      ...baseCommon,
      ...common,
    },
  }

  const remote: Form = {
    form: 'form',
    link: {
      async: { like: 'boolean' },
      explain: { like: 'boolean' },
      input: {
        link: {
          format: { like: i },
          file: { like: 'file_content' },
        },
      },
      output: {
        link: {
          format: { like: o },
        },
      },
      ...baseCommon,
      ...common,
    },
  }

  return {
    output,
    response,
    common,
    call,
    local,
    command,
    remote,
  }
}
