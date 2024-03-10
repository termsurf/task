import replaceFileExtension from 'replace-ext'

export { replaceFileExtension }

export function fitCommandToScreen(
  array: Array<string>,
  size = 72,
): string {
  const lines: Array<string> = []
  let line: Array<string> = []

  array.forEach((x, i) => {
    line.push(x)

    let ind = lines.length ? '  ' : ''

    if (i > 0) {
      if (i === array.length - 1) {
        if (`${ind}${line.join(' ')}`.length > size) {
          line.pop()
          if (x.match(/^-/)) {
            if (line.join(' ').trim()) {
              lines.push(`${ind}${line.join(' ')} \\`)
            }
            lines.push(`${ind}${x}`)
          } else {
            let option = line[line.length - 1]?.match(/^-/)
              ? line.pop()
              : undefined
            if (line.join(' ').trim()) {
              lines.push(`${ind}${line.join(' ')} \\`)
            }
            line = [[option, x].filter(x => x).join(' ')]
            lines.push(`${ind}${line.join(' ')}`)
          }
        } else {
          lines.push(`${ind}${line.join(' ')}`)
        }
      } else {
        if (`${ind}${line.join(' ')} \\`.length > size) {
          line.pop()
          if (x.match(/^-/)) {
            if (line.join(' ').trim()) {
              lines.push(`${ind}${line.join(' ')} \\`)
            }
            line = [x]
          } else {
            let option = line[line.length - 1]?.match(/^-/)
              ? line.pop()
              : undefined
            if (line.join(' ').trim()) {
              lines.push(`${ind}${line.join(' ')} \\`)
            }
            line = [[option, x].filter(x => x).join(' ')]
          }
        }
      }
    }
  })

  return lines.join('\n')
}
