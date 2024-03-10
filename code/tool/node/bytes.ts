import randomBytes from 'randombytes'

export function getRandomBytes(n: number) {
  return randomBytes(n) as Uint8Array
}
