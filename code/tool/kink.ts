import Kink from '@termsurf/kink'

const host = '@termsurf/task'

type BaseZodError = {
  link: Array<string | number>
  message: string
}

type Base = {
  abort_error: {
    take: {
      link: string
    }
    // base: {
    //   url: string
    // }
    // fill: {
    //   url: string
    // }
  }
  call_fail: {
    take: {}
  }
  command_missing: {
    take: {
      name: string
    }
  }
  form_fail: {
    take: BaseZodError & {
      need: string
      have: string
    }
  }
  unrecognized_keys: {
    take: BaseZodError & {
      list: Array<string>
    }
  }
  font_forge_error: {
    take: {
      note: string
    }
  }
  file_missing_error: {
    take: {
      path: string
    }
  }
  io_match: {
    take: {
      format: string
    }
  }
  task_not_implemented: {
    take: {
      task: string
      link: Array<string>
    }
  }
  file_already_exists: {
    take: {
      path: string
    }
  }
  compilation_error: {
    take: {
      note: string
    }
  }
  invalid_path: {
    take: {
      path: string
    }
  }
}

type Name = keyof Base

Kink.code(host, (code: number) => code.toString(16).padStart(4, '0'))

Kink.base(host, 'abort_error', (take: Base['abort_error']['take']) => ({
  code: 1,
  note: 'Request timeout',
  link: take.link,
}))

Kink.base(
  host,
  'command_missing',
  (take: Base['command_missing']['take']) => ({
    code: 2,
    note: `Command does not exist on OS.`,
    link: {
      name: take.name,
    },
  }),
)

Kink.base(
  host,
  'invalid_path',
  (take: Base['invalid_path']['take']) => ({
    code: 2,
    note: `Path must be for a file or URL.`,
    link: {
      path: take.path,
    },
  }),
)

Kink.base(host, 'call_fail', () => ({
  code: 3,
  note: 'System unable to make request currently',
}))

Kink.base(host, 'form_fail', (take: Base['form_fail']['take']) => ({
  code: 4,
  note: 'Invalid link type',
  need: take.need,
  have: take.have,
  link: take.link,
  hint: take.message,
}))

// https://github.com/colinhacks/zod/blob/master/ERROR_HANDLING.md
Kink.base(
  host,
  'unrecognized_keys',
  (take: Base['unrecognized_keys']['take']) => ({
    code: 4,
    note: 'Unrecognized keys in object',
    list: take.list,
    link: take.link,
    hint: take.message,
  }),
)

Kink.base(
  host,
  'file_missing_error',
  (take: Base['file_missing_error']['take']) => ({
    code: 4,
    note: `Task tool couldn't find file.`,
    link: { path: take.path },
  }),
)

Kink.base(
  host,
  'font_forge_error',
  (take: Base['font_forge_error']['take']) => ({
    code: 5,
    note: `Font forge error. ${take.note}`,
  }),
)

Kink.base(host, 'io_match', (take: Base['io_match']['take']) => ({
  code: 6,
  note: `Input and output formats are the same, must be different instead.`,
  link: { format: take.format },
}))

Kink.base(
  host,
  'task_not_implemented',
  (take: Base['task_not_implemented']['take']) => ({
    code: 6,
    note: `Task is not implemented yet.`,
    link: { task: take.task, link: take.link },
  }),
)

Kink.base(
  host,
  'file_already_exists',
  (take: Base['file_already_exists']['take']) => ({
    code: 6,
    note: `File already exists.`,
    link: { path: take.path },
  }),
)

Kink.base(
  host,
  'compilation_error',
  (take: Base['compilation_error']['take']) => ({
    code: 6,
    note: `Compilation error.`,
    link: { note: take.note },
  }),
)

export default function kink<N extends Name>(
  form: N,
  link?: Base[N]['take'],
) {
  return Kink.make(host, form, link)
}
