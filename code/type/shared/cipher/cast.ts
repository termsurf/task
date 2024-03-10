import _ from 'lodash'

import { Cipher } from '~/code/type/shared/base/cast'

export type CipherContentValue = {
  head: string
}

export type CipherContent = Record<Cipher, CipherContentValue>
