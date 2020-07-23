
const chart = require('./chart')

/**
 * Expose `start`.
 */

module.exports = start

/**
 * Start CLI.
 */

async function start(argv) {
  const input = parse(argv)

  switch (input.action) {
    case 'compress': return await chart.compress(input)
    case 'convert': return await chart.convert(input)
    case 'replace': return await chart.replace(input)
    case 'create': return await chart.create(input)
    case 'remove': return await chart.remove(input)
    case 'rename': return await chart.rename(input)
    case 'resize': return await chart.resize(input)
    case 'update': return await chart.update(input)
    case 'build': return await chart.build(input)
    case 'slice': return await chart.slice(input)
    case 'split': return await chart.split(input)
    case 'read': return await chart.read(input)
    case 'add': return await chart.add(input)
    default: throw new Error(`${input.action} without handler`)
  }
}

/**
 * Generically parse CLI args.
 */

function parse(argv) {
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
