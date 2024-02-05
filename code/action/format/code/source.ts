import { Form } from '@termsurf/form'

export const format_rust_with_prettier: Form = {
  form: 'form',
  link: {
    use_tabs: { like: 'boolean', need: false },
    tab_width: { like: 'natural_number', need: false },
    max_line_length: { like: 'natural_number', need: false },
    end_of_line: { like: 'string', need: false },
  },
}

export const format_java_with_prettier: Form = {
  form: 'form',
  link: {
    max_line_length: { like: 'natural_number', need: false },
    indentation_size: { like: 'natural_number', need: false },
    use_tabs: { like: 'boolean', need: false },
    trailing_comma: { like: 'boolean', need: false },
  },
}

export const format_typescript_with_prettier: Form = {
  form: 'form',
  link: {
    jsx_single_quote: { like: 'boolean' },
    single_quote: { like: 'boolean' },
    semi_colon: { like: 'boolean' },
    indentation_size: { like: 'natural_number' },
    max_line_length: { like: 'natural_number' },
    trailing_comma: { like: 'boolean' },
    bracket_spacing: { like: 'boolean' },
    bracket_same_line: { like: 'boolean' },
    arrow_parentheses: { like: 'boolean' },
    end_of_line: { like: 'string' },
    single_attribute_per_line: { like: 'boolean' },
  },
}

export const format_sh_with_prettier: Form = {
  form: 'form',
  link: {
    keep_comments: { like: 'boolean', need: false },
    stop_at: { like: 'string', need: false },
    variant: { like: 'string', need: false },
    indent: { like: 'natural_number', need: false },
    binary_next_line: { like: 'boolean', need: false },
    switch_case_indent: { like: 'boolean', need: false },
    space_redirects: { like: 'boolean', need: false },
    keep_padding: { like: 'boolean', need: false },
    minify: { like: 'boolean', need: false },
    function_next_line: { like: 'boolean', need: false },
  },
}

export const format_kotlin: Form = {
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
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}

export const format_swift: Form = {
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
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}

export const format_rust: Form = {
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
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}

export const format_python: Form = {
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
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}

export const format_ruby: Form = {
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
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}

export const format_assembly: Form = {
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
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}

export const format_c: Form = {
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
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}

export const format_cpp: Form = {
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
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}

export const format_java: Form = {
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
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}

export const format_code_with_clang_format: Form = {
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
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
    style: {
      like: 'clang_style_all',
      need: false,
    },
  },
}

export const format_sql_with_content: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'string', name: { mark: 'I' } },
        file: {
          link: {
            content: {
              case: [{ like: 'ArrayBuffer' }, { like: 'string' }],
            },
          },
        },
      },
    },
  },
}
