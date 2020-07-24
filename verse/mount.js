
const build = require('./build')
const front = require('./front')

/**
 * Expose `cause`.
 */

exports.cause = cause

/**
 * Expose `drive`.
 */

exports.drive = drive

/**
 * Cause an action in the wheel.
 */

async function cause(force, state) {
  if (!front.hasOwnProperty(force)) {
    throw new Error(`Action ${force} undefined`)
  }

  return await front[force](state)
}

/**
 * Parse the input into an action and state.
 */

function drive(argv) {
  const input = fetch(argv)

  switch (input.action) {
    case 'compress': return build.compress(input)
    case 'convert': return build.convert(input)
    case 'replace': return build.replace(input)
    case 'create': return build.create(input)
    case 'remove': return build.remove(input)
    case 'rename': return build.rename(input)
    case 'resize': return build.resize(input)
    case 'update': return build.update(input)
    case 'upload': return build.upload(input)
    case 'build': return build.build(input)
    case 'slice': return build.slice(input)
    case 'split': return build.split(input)
    case 'read': return build.read(input)
    case 'add': return build.add(input)
    default: throw new Error(`Action ${input.action} undefined`)
  }
}

/**
 * Generically fetch CLI args.
 */

function fetch(argv) {
  let i = 2
  const input = {
    action: argv[i++],
    object: [],
    detail: {}
  }

  while (i < argv.length) {
    const item = argv[i++]
    if (item.match(/^-+/)) {
      const name = item.replace(/^-+/, '')
      let value = argv[i++]
      if (!value) {
        value = true
      } else if (value.match(/^-+/)) {
        i--
        value = true
      }
      input.detail[name] = input.detail[name] || []
      input.detail[name].push(value)
    } else {
      input.object.push(item)
    }
  }

  return input
}
