import _ from 'lodash'

import { UnarchiverFormat } from '~/code/type/shared/base/cast'

export type UnarchiverFormatContentValue = {
  head: string
}

export type UnarchiverFormatContent = Record<
  UnarchiverFormat,
  UnarchiverFormatContentValue
>
