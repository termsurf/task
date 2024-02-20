import { Format, FormatInputFormat } from '~/code/type/call/format'

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

// type Format<T extends keyof FormatOptions> = {
//   input: {
//     format: T
//   }
//   code: string
// } & FormatOptions[T]

// type FormatOptions = {
//   html: Html
//   typescript: Typescript
// }

// type Html = { singleQuotes?: boolean }
// type Typescript = { singleQuotes?: boolean; semicolons?: boolean }

// export function format<I extends keyof FormatOptions>(
//   source: Format<I>,
// ) {
//   console.log(source)
//   return { code: 'foo' } as FormatOutputs
// }

// type FormatOutputs = {
//   code: string
// }
