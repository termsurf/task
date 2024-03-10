export function getRandomIntegerBetween({
  min,
  max,
}: {
  min: number
  max: number
}) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function generateCumulativeWeightedRandomArray(
  weights: Array<number>,
) {
  // Preparing the cumulative weights array.
  // For example:
  // - weights = [1, 4, 3]
  // - cumulativeWeights = [1, 5, 8]
  const cumulativeWeights: Array<number> = []
  for (let i = 0; i < weights.length; i += 1) {
    cumulativeWeights[i] = weights[i]! + (cumulativeWeights[i - 1] || 0)
  }

  return cumulativeWeights
}

export function getWeightedRandomIndex(
  cumulativeWeights: Array<number>,
) {
  // Getting the random number in a range of [0...sum(weights)]
  // For example:
  // - weights = [1, 4, 3]
  // - maxCumulativeWeight = 8
  // - range for the random number is [0...8]
  const maxCumulativeWeight =
    cumulativeWeights[cumulativeWeights.length - 1]!
  const randomNumber = maxCumulativeWeight * Math.random()

  // Picking the random item based on its weight.
  // The items with higher weight will be picked more often.
  let itemIndex = 0
  while (itemIndex < cumulativeWeights.length) {
    if (cumulativeWeights[itemIndex]! >= randomNumber) {
      return itemIndex
    }
    itemIndex++
  }
}
