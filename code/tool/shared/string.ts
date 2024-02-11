export function arrayBufferToString(buffer: ArrayBuffer) {
  const bufView = new Uint16Array(buffer)
  const length = bufView.length
  const result: Array<string> = []
  let addition = Math.pow(2, 16) - 1

  for (var i = 0; i < length; i += addition) {
    if (i + addition > length) {
      addition = length - i
    }

    result.push(
      String.fromCharCode.apply(null, [
        ...bufView.subarray(i, i + addition),
      ]),
    )
  }

  return result.join('')
}
