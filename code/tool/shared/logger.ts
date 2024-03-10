let above = false
let below = false

export function logWithSpace(text: string) {
  if (!above) {
    // console.log('')
    above = true
    below = false
  }
  console.log(text)
  // console.log('')
}

export function log(text: string) {
  console.log(text)
  above = false
}
