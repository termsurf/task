import { Form } from '@termsurf/form'

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
