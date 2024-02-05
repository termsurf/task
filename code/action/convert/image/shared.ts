// import _ from 'lodash'
// import {
//   formatCommand,
//   formatTypeScriptCode,
// } from '~/code/tool/shared/format'

// export type ExplainCode = {
//   task: string
//   input: Record<string, any>
// }

// export async function explainCode(input: ExplainCode) {
//   const text: Array<string> = []

//   text.push(`import task from '@termsurf/task'`)
//   text.push(``)
//   text.push(`test()`)
//   text.push(``)
//   text.push(`async function test() {`)
//   text.push(`  await task.${input.task}(`)
//   text.push(JSON.stringify(input.input, null, 2))
//   text.push(`  )`)
//   text.push(`}`)

//   return formatTypeScriptCode(text.join('\n'))
// }

// export async function explainCommand(input: ExplainCode) {
//   const text: Array<string> = []

//   text.push(`import task from '@termsurf/task'`)
//   text.push(``)
//   text.push(`test()`)
//   text.push(``)
//   text.push(`async function test() {`)
//   text.push(`  await task.${input.task}(`)
//   text.push(JSON.stringify(input.input, null, 2))
//   text.push(`  )`)
//   text.push(`}`)

//   return formatCommand(text.join('\n'))
// }

// export async function explainCurl(input: ExplainCode) {
//   const text: Array<string> = []

//   text.push(`import task from '@termsurf/task'`)
//   text.push(``)
//   text.push(`test()`)
//   text.push(``)
//   text.push(`async function test() {`)
//   text.push(`  await task.${input.task}(`)
//   text.push(JSON.stringify(input.input, null, 2))
//   text.push(`  )`)
//   text.push(`}`)

//   return formatCommand(text.join('\n'))
// }

// export async function explainConvertImageWithImageMagick(
//   input: ConvertImageWithImageMagick,
// ) {
//   switch (input.explain) {
//     case 'code': {
//       return explainCode({
//         task: 'convert',
//         input: _.omit(input, ['explain']),
//       })
//     }
//     case 'command': {
//       // return buildNodeFunctionToConvertImageWithImageMagick(input)
//     }
//     case 'curl': {
//       // return buildBrowserFunctionToConvertImageWithImageMagick(input)
//     }
//   }
// }
