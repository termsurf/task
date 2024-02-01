import { Form } from '@termsurf/form'

export const compile_swift: Form = {
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
        format: { like: 'backend_compilation_output' },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}

export const compile_c: Form = {
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
        format: { like: 'backend_compilation_output' },
        syntax: { like: 'assembly_syntax', need: false },
        architecture: { like: 'llvm_architecture' },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
    optimizationLevel: {
      like: 'llvm_optimization_level',
      fall: '0',
      need: false,
    },
    fastMath: { like: 'boolean', fall: false, need: false },
  },
}

export const compile_cpp: Form = {
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
        architecture: { like: 'llvm_architecture' },
        format: { like: 'backend_compilation_output' },
        syntax: { like: 'assembly_syntax', need: false },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
    optimizationLevel: {
      like: 'llvm_optimization_level',
      fall: '0',
      need: false,
    },
    fastMath: { like: 'boolean', fall: false, need: false },
  },
}

export const compile_llvm_ir_to_assembly: Form = {
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
        syntax: { like: 'assembly_syntax', fall: 'intel' },
        architecture: { like: 'llvm_architecture', fall: 'x86_64' },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}

export const compile_to_ast: Form = {
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
  },
}

export const compile_java: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'string' },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}

export const compile_rust: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'string', name: { mark: 'I' } },
        file: {
          link: {
            path: { like: 'string', name: { mark: 'i' } },
          },
        },
      },
    },
    explain: { like: 'boolean', fall: false, need: false },
    output: {
      link: {
        format: { like: 'rust_output_format', name: { mark: 'O' } },
        optimize: { like: 'boolean', fall: false, need: false },
        target: { like: 'rust_compiler_target', need: false },
        file: {
          link: {
            path: { like: 'string', name: { mark: 'o' } },
          },
        },
      },
    },
  },
}

export const compile_wast: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'string' },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}

export const compile_llvm: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'string' },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}

export const compile_asm: Form = {
  form: 'form',
  link: {
    input: {
      link: {
        format: { like: 'string' },
        file: {
          link: {
            path: { like: 'string' },
          },
        },
      },
    },
  },
}
