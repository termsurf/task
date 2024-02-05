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

  const node_output: Form = {
    form: 'form',
    link: {
      output: {
        link: {
          file: { like: 'file_path' },
        },
      },
    },
  }

  const browser_output: Form = {
    form: 'form',
    link: {
      output: {
        link: {
          file: { like: 'file_content' },
        },
      },
    },
  }

  const node_output_response = defineResponse(`${name}_node_output`)

  const node_call: Form = {
    form: 'form',
    link: {
      remote: { like: 'boolean', name: { mark: 'R' } },
      async: { like: 'boolean', name: { mark: 'A' } },
      explain: { like: 'explain_format', name: { mark: 'E' } },
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
          file: { like: 'file_output_path' },
        },
      },
      ...baseCommon,
      ...common,
    },
  }

  const node_local_call: Form = {
    form: 'form',
    link: {
      async: { like: 'boolean', need: false },
      explain: { like: 'explain_format', need: false },
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

  const node_command: Form = {
    form: 'form',
    link: {
      async: { like: 'boolean', need: false },
      explain: { like: 'explain_format', need: false },
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

  const node_remote_call: Form = {
    form: 'form',
    link: {
      async: { like: 'boolean', need: false },
      input: {
        link: {
          format: { like: i },
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
          format: { like: o },
        },
      },
      ...baseCommon,
      ...common,
    },
  }

  const browser_call: Form = {
    form: 'form',
    link: {
      remote: { like: 'boolean', need: false },
      async: { like: 'boolean', need: false },
      explain: { like: 'explain_format', name: { mark: 'E' } },
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
    node_output,
    node_output_response,
    node_call,
    node_local_call,
    node_command,
    node_remote_call,
    browser_call,
    browser_output,
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

  const node_output: Form = {
    form: 'form',
    link: {
      output: {
        link: {
          file: { like: 'file_path' },
        },
      },
    },
  }

  const browser_output: Form = {
    form: 'form',
    link: {
      output: {
        link: {
          file: { like: 'file_content' },
        },
      },
    },
  }

  const node_output_response = defineResponse(`${name}_node_output`)

  // nodejs call
  const node_call: Form = {
    form: 'form',
    link: {
      remote: { like: 'boolean', name: { mark: 'R' } },
      async: { like: 'boolean', name: { mark: 'A' } },
      explain: { like: 'explain_format', name: { mark: 'E' } },
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

  const node_local_call: Form = {
    form: 'form',
    link: {
      async: { like: 'boolean', need: false },
      explain: { like: 'explain_format', need: false },
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

  const node_command: Form = {
    form: 'form',
    link: {
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

  const node_remote_call: Form = {
    form: 'form',
    link: {
      async: { like: 'boolean', need: false },
      explain: { like: 'explain_format', need: false },
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

  const browser_call: Form = {
    form: 'form',
    link: {
      remote: { like: 'boolean', name: { mark: 'R' } },
      async: { like: 'boolean', name: { mark: 'A' } },
      explain: { like: 'explain_format', name: { mark: 'E' } },
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
    node_output,
    node_output_response,
    node_call,
    node_local_call,
    node_command,
    node_remote_call,
    browser_call,
    browser_output,
  }
}
