import make from '@termsurf/form/host/make'
import * as mesh from '~/code/source.js'
// import '~/code/shared/type/source/call/convert.js'
import fs from 'fs'
import _ from 'lodash'

make({ test: `./code.js`, mesh }).then(({ tree }) => {
  // fs.writeFileSync(`./code/shared/type/index.ts`, tree.base as string)
  fs.writeFileSync(`./code/type/cast.ts`, tree.cast)
  fs.writeFileSync(`./code/type/take.ts`, tree.take)
  // fs.writeFileSync(`./code/cli/type/link.ts`, tree.line)
})
