import kink from '~/code/tool/kink.js'

const BASE_PATH = `https://base.task.surf/v2`

export async function post(input) {
  fetchWithTimeout(`${BASE_PATH}/${input.url}`, {
    ...input,
    method: 'POST',
  })
}

export type FetchOptions = RequestInit & {
  timeout?: number
  controller?: AbortController
}

export async function fetchWithTimeout(
  resource: string,
  options: FetchOptions = {},
) {
  const { timeout = 20000 } = options

  const controller = options.controller || new AbortController()
  const id = setTimeout(() => controller.abort('timeout'), timeout)

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  })

  clearTimeout(id)

  return response
}

export const PATH_TYPE = [
  'https-uri',
  'http-uri',
  'ftps-uri',
  'ftp-uri',
  'file-uri',
  'file-path',
]

export type PathType = (typeof PATH_TYPE)[number]

export type ParsePath =
  | {
      type: 'file-uri'
      protocol: 'file:'
      href: string
    }
  | {
      type: Exclude<PathType, 'file-path'>
      protocol: string
      hostname?: string
      username?: string
      password?: string
      port?: number
      pathname?: string
      search?: string
      href: string
    }

export function parsePath(path: string): ParsePath {
  const type = getPathType(path)
  switch (type) {
    case 'file-path':
      return { type: 'file-uri', protocol: 'file:', href: path }
    case 'file-uri':
      return {
        type: 'file-uri',
        protocol: 'file:',
        href: path.slice('file://'.length),
      }
    default:
      const url = new URL(path)
      return {
        type,
        protocol: url.protocol,
        hostname: url.hostname,
        username: url.username ? url.username : undefined,
        password: url.password ? url.password : undefined,
        port: url.port ? parseInt(url.port, 10) : undefined,
        pathname: url.pathname ? url.pathname : undefined,
        search: url.search ? url.search : undefined,
        href: url.href,
      }
  }
}

export function getPathType(path: string): PathType {
  if (path.startsWith('https://')) {
    return 'https-uri'
  }
  if (path.startsWith('http://')) {
    return 'http-uri'
  }
  if (path.startsWith('ftps://')) {
    return 'ftps-uri'
  }
  if (path.startsWith('ftp://')) {
    return 'ftp-uri'
  }
  if (path.startsWith('file://')) {
    return 'file-uri'
  }
  if (path.match(/^\w+:\/\//)) {
    throw kink('invalid_path', { path })
  }
  return 'file-path'
}

export async function requestMany(
  controller: AbortController,
  list: Array<Promise<Response>>,
) {
  return Promise.all(
    list.map((req, i) => {
      req.catch(e => {
        controller.abort(e)
      })
      return req
    }),
  )
}
