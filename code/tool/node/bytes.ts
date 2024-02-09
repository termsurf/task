import crypto from 'crypto'

export function getRandomBytes(n: number) {
  // make sure that we do not fail because we ran out of entropy
  try {
    return crypto.randomBytes(n)
  } catch (e) {
    return crypto.pseudoRandomBytes(n)
  }
}
