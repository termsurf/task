const CONFIG_VARIABLE = [
  'remote',
  'code',
  'environment',
  'puppeteer-args',
  'puppeteer-debugging-port',
  'debug-puppeteer',
] as const

export const ENVIRONMENT = ['cli', 'server', 'browser'] as const

export const DEFAULT_REMOTE_TASK_PATH = `https://base.task.surf/v2`

export type Config = (typeof CONFIG_VARIABLE)[number]

const CONFIG: Record<Config, any> = {
  remote: DEFAULT_REMOTE_TASK_PATH,
  code: undefined,
  environment: 'cli',
  'puppeteer-args': ['--no-sandbox', '--disable-setuid-sandbox'],
  'puppeteer-debugging-port': '9222',
  'debug-puppeteer': false,
}

export function configure(name: Config, value: any) {
  CONFIG[name] = value
}

export function getConfig(name: Config) {
  return CONFIG[name]
}
