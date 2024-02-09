import { Form, FormLink, Mesh } from '@termsurf/form'
import { Input, Link, Value } from './type.js'
import _ from 'lodash'

export function transferInput(source, map: Record<string, Link>) {
  const out: Record<string, Value | Array<Value>> = {}
  for (const name in source.detail) {
    const link = map[name]
    const detail =
      source.detail[name]?.map(v => {
        switch (link?.like) {
          case 'string':
            return v
          case 'integer':
            return parseInt(v as string, 10)
          case 'decimal':
            return parseFloat(v as string)
        }
        return v
      }) ?? []
    const val = link?.list ? detail : detail[0]
    if (link?.line) {
      _.set(out, link.line, val)
    } else if (val != null) {
      out[name] = val
    }
  }
  return out
}

export type CliOption = {
  line: Array<string>
  link: Array<string>
  note?: string
}

export function buildCliOptions(
  mesh: Mesh,
  form: Form | FormLink,
  line: Array<string> = [],
) {
  const opts: Array<CliOption> = []

  if ('link' in form && form.link) {
    for (const name in form.link) {
      const link = form.link[name]
      if (!link) {
        continue
      }

      const lineName = line.concat([name])

      if (link.link || link.case) {
        opts.push(...buildCliOptions(mesh, link, lineName))
      } else {
        if (link.like && mesh[link.like]?.form === 'form') {
          const form = mesh[link.like]
          if (form?.form === 'form') {
            opts.push(...buildCliOptions(mesh, form, lineName))
          }
        } else {
          const mark = link.name?.mark && `-${link.name.mark}`
          const name = `--${_.kebabCase(lineName.join('-'))}`
          const list = [mark, name].filter(x => x)
          opts.push({
            link: list as Array<string>,
            note: link.note,
            line: lineName,
          })
        }
      }
    }
  } else if ('case' in form && form.case && Array.isArray(form.case)) {
    for (const _case of form.case) {
      if (typeof _case === 'object' && 'like' in _case && _case.like) {
        const form = mesh[_case.like]
        if (form?.form === 'form') {
          opts.push(...buildCliOptions(mesh, form, line))
        }
      }
    }
  }

  return opts
}

export function buildInputMapping(mesh: Mesh, form: Form | FormLink) {
  const list = buildCliOptions(mesh, form)

  const map = list.reduce<Record<string, { line: Array<string> }>>(
    (m, x) => {
      x.link.forEach(link => {
        m[link.replace(/^\-+/, '')] = { line: x.line }
      })
      return m
    },
    {},
  )

  return map
}

/**
 * Generically fetch CLI args.
 */

export function read(argv: Array<string>) {
  let i = 2
  const input: Input = {
    action: argv[i++] as string,
    object: [],
    detail: {},
  }

  while (i < argv.length) {
    const item = argv[i++] as string
    if (item.match(/^-+/)) {
      const name = item
      const cased = name.match(/^--/)
        ? _.camelCase(name)
        : name.replace(/^\-+/, '')
      let value: Value = argv[i++] as string
      if (!value) {
        value = true
      } else if (value.match(/^-+/)) {
        i--
        value = true
      }
      const detail = (input.detail[cased] = input.detail[cased] || [])
      detail.push(value)
    } else {
      input.object.push(item)
    }
  }

  return input
}
