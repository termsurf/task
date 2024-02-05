import node from '~/code/node.js'

const format = JSON.parse('"jpg"')

node.convert({
  input: { format: 'png', file: { path: './foo.png' } },
  output: { format: format, file: { path: './foo.jpg' } },
})
