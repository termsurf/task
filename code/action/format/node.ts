import { Format, FormatInputFormat } from '~/code/type/call/format.js'

export async function format<I extends FormatInputFormat>(
  props: Format<I>,
) {
  switch (props.input.format) {
    case 'c':
    case 'cpp':
      // return await runFormatCCommand(props)
      return
  }
}
