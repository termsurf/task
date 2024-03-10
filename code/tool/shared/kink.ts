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
  invalid_gematria_script_rank: {
    take: {
      form: string | null
      rank: number
    }
  }
  invalid_gematria_script: {
    take: {
      form: string | null
    }
  }
  invalid_file_access: {
    take: {
      path: string
    }
  }
  function_todo: {
    take: {
      name: string
    }
  }
  system_error: {
    take: {}
  }
  invalid_cli_input: {
    take: {
      actual: string
    }
  }
  invalid_cli_command: {
    take: {
      task: string
    }
  }
}

let CODE_INDEX = 1

const CODE = {
  abort_error: CODE_INDEX++,
  call_fail: CODE_INDEX++,
  command_missing: CODE_INDEX++,
  form_fail: CODE_INDEX++,
  unrecognized_keys: CODE_INDEX++,
  font_forge_error: CODE_INDEX++,
  file_missing_error: CODE_INDEX++,
  io_match: CODE_INDEX++,
  task_not_implemented: CODE_INDEX++,
  file_already_exists: CODE_INDEX++,
  compilation_error: CODE_INDEX++,
  invalid_path: CODE_INDEX++,
  invalid_gematria_script_rank: CODE_INDEX++,
  invalid_gematria_script: CODE_INDEX++,
  invalid_file_access: CODE_INDEX++,
  function_todo: CODE_INDEX++,
  system_error: CODE_INDEX++,
  invalid_cli_input: CODE_INDEX++,
  invalid_cli_command: CODE_INDEX++,
}

type Name = keyof Base

Kink.code(host, (code: number) => code.toString(16).padStart(4, '0'))

Kink.base(host, 'abort_error', (take: Base['abort_error']['take']) => ({
  code: CODE.abort_error,
  note: 'Call aborted.',
  link: take.link,
}))

Kink.base(
  host,
  'invalid_cli_command',
  (take: Base['invalid_cli_command']['take']) => ({
    code: CODE.invalid_cli_command,
    note: 'Command not supported.',
    link: {
      task: take.task,
    },
  }),
)

Kink.base(
  host,
  'invalid_cli_input',
  (take: Base['invalid_cli_input']['take']) => ({
    code: 1,
    note: 'Invalid CLI input, expected --arg.',
    link: {
      actual: take.actual,
    },
  }),
)

Kink.base(
  host,
  'command_missing',
  (take: Base['command_missing']['take']) => ({
    code: CODE.command_missing,
    note: `Command does not exist on OS.`,
    link: {
      name: take.name,
    },
  }),
)

Kink.base(
  host,
  'system_error',
  (take: Base['system_error']['take']) => ({
    code: CODE.system_error,
    note: `System error.`,
  }),
)

Kink.base(
  host,
  'invalid_path',
  (take: Base['invalid_path']['take']) => ({
    code: CODE.invalid_path,
    note: `Path must be for a file or URL.`,
    link: {
      path: take.path,
    },
  }),
)

Kink.base(
  host,
  'function_todo',
  (take: Base['function_todo']['take']) => ({
    code: CODE.function_todo,
    note: `Function not yet implemented.`,
    link: {
      name: take.name,
    },
  }),
)

Kink.base(host, 'call_fail', () => ({
  code: CODE.call_fail,
  note: 'System unable to make request currently',
}))

Kink.base(host, 'form_fail', (take: Base['form_fail']['take']) => ({
  code: CODE.form_fail,
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
    code: CODE.unrecognized_keys,
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
    code: CODE.file_missing_error,
    note: `Task tool couldn't find file.`,
    link: { path: take.path },
  }),
)

Kink.base(
  host,
  'font_forge_error',
  (take: Base['font_forge_error']['take']) => ({
    code: CODE.font_forge_error,
    note: `Font forge error. ${take.note}`,
  }),
)

Kink.base(host, 'io_match', (take: Base['io_match']['take']) => ({
  code: CODE.io_match,
  note: `Input and output formats are the same, must be different instead.`,
  link: { format: take.format },
}))

Kink.base(
  host,
  'task_not_implemented',
  (take: Base['task_not_implemented']['take']) => ({
    code: CODE.task_not_implemented,
    note: `Task is not implemented yet.`,
    link: { task: take.task },
  }),
)

Kink.base(
  host,
  'file_already_exists',
  (take: Base['file_already_exists']['take']) => ({
    code: CODE.file_already_exists,
    note: `File already exists.`,
    link: { path: take.path },
  }),
)

Kink.base(
  host,
  'invalid_gematria_script_rank',
  (take: Base['invalid_gematria_script_rank']['take']) => ({
    code: CODE.invalid_gematria_script_rank,
    note: `Gematria script is not 100% of the input.`,
    link: take,
  }),
)

Kink.base(
  host,
  'invalid_file_access',
  (take: Base['invalid_file_access']['take']) => ({
    code: CODE.invalid_file_access,
    note: `Not allowed to access this file path.`,
    link: take,
  }),
)

Kink.base(
  host,
  'invalid_gematria_script',
  (take: Base['invalid_gematria_script']['take']) => ({
    code: CODE.invalid_gematria_script,
    note: `Gematria script is not supported.`,
    link: take,
  }),
)

Kink.base(
  host,
  'compilation_error',
  (take: Base['compilation_error']['take']) => ({
    code: CODE.compilation_error,
    note: `Compilation error.`,
    link: { note: take.note },
  }),
)

export default function kink<N extends Name>(
  form: N,
  link?: Base[N]['take'],
  siteCode?: number,
) {
  const kink = Kink.make(host, form, link)
  if (siteCode) {
    kink.siteCode = siteCode
  }
  return kink
}
