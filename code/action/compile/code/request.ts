import { buildRemoteRequest } from '~/code/tool/shared/request.js'

export async function buildRequestToCompileC(input) {
  return buildRemoteRequest(`/compile/c`, input)
}

export async function compileJavaRemote(input) {
  return buildRemoteRequest(`/compile/java`, input)
}

export async function compileCppRemote(input) {
  return buildRemoteRequest(`/compile/cpp`, input)
}
