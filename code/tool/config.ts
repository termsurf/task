const CONFIG = ['surf', 'code'] as const

export type Config = (typeof CONFIG)[number]

const config: Record<Config, any> = {
  surf: false,
  code: undefined,
}

export function setConfig(name: Config, value: any) {
  config[name] = value
}

export function getConfig(name: Config) {
  return config[name]
}
