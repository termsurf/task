import _ from 'lodash'

import {
  BackendCompilationOutput,
  LlvmArchitecture,
  LlvmCpu,
  LlvmFeature,
} from '~/code/type/shared/base/cast'

export type BackendCompilationOutputContentValue = {
  extension?: string
}

export type BackendCompilationOutputContent = Record<
  BackendCompilationOutput,
  BackendCompilationOutputContentValue
>
export type LlvmArchitectureContentValue = {
  host: string
  note: string
  cpu: Array<string>
  feature: Array<string>
}

export type LlvmArchitectureContent = Record<
  LlvmArchitecture,
  LlvmArchitectureContentValue
>
export type LlvmCpuContentValue = {
  host: string
  note: string
}

export type LlvmCpuContent = Record<LlvmCpu, LlvmCpuContentValue>
export type LlvmFeatureContentValue = {
  host: string
  note: string
}

export type LlvmFeatureContent = Record<
  LlvmFeature,
  LlvmFeatureContentValue
>
