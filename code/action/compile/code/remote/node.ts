import { post } from '~/code/tool/index.js'

export async function compileCRemote(input) {
  return post({
    path: `/compile/c`,
    body: input,
  })
}

export async function compileJavaRemote(input) {
  return post({
    path: `/compile/java`,
    body: input,
  })
}

export async function compileCppRemote(input) {
  return post({
    path: `/compile/cpp`,
    body: input,
  })
}
