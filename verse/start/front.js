
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
    case 'create': return await chart.create(input)
    case 'remove': return await chart.remove(input)
    case 'rename': return await chart.rename(input)
    case 'update': return await chart.update(input)
    case 'build': return await chart.build(input)
    case 'slice': return await chart.slice(input)
    case 'split': return await chart.split(input)
    case 'read': return await chart.read(input)
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
      const value = argv[i++]
      input.detail[name] = input.detail[name] || []
      input.detail[name].push(value)
    } else {
      input.object.push(item)
    }
  }

  return input
}
