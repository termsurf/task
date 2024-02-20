import { ConvertTest } from '../convert/shared'
import { Action, Object, Tool } from '../shared'

// export type TestExtension = {
//   'convert:ffmpeg:video': ConvertTest
//   'convert:image-magick:image': ConvertTest
//   'convert:pandoc:document': ConvertTest
//   'convert:libre-office:document': ConvertTest
//   'convert:calibre:document': ConvertTest
// }

export type Test<T extends Tool, A extends Action, O extends Object> = {
  tool: T
  action: A
  type: O
}
