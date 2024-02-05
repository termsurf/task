const CONFIG = ['remote', 'code'] as const

export const DEFAULT_REMOTE_TASK_PATH = `https://base.task.surf/v2`

export type Config = (typeof CONFIG)[number]

const config: Record<Config, any> = {
  remote: DEFAULT_REMOTE_TASK_PATH,
  code: undefined,
}

export function setConfig(name: Config, value: any) {
  config[name] = value
}

export function getConfig(name: Config) {
  return config[name]
}
