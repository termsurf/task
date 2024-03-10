import _ from 'lodash'

import {
  CalibreInputFormat,
  CalibreOutputFormat,
} from '~/code/type/shared/base/cast'

export type CalibreInputFormatContentValue = {
  head: string
}

export type CalibreInputFormatContent = Record<
  CalibreInputFormat,
  CalibreInputFormatContentValue
>
export type CalibreOutputFormatContentValue = {
  head: string
}

export type CalibreOutputFormatContent = Record<
  CalibreOutputFormat,
  CalibreOutputFormatContentValue
>
