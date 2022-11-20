const target = (width) => +width + 0.125

const ringSizes = [1, (1 / 2), (1 / 4), (1 / 8), (1 / 16), (1 / 32)]

export const initialCounts = {
  "inch": 0,
  "half": 0,
  "quarter": 0,
  "eigth": 0,
  "sixteenth": 0,
  "thirtysecond": 0,
}

export default function newCounts(width, counts) {
  let t = !+width ? 0 : target(width)
  let nCounts = { ...initialCounts }

  Object.keys(counts).forEach((cur, i) => {
    if (i === 0) {
      nCounts = {
        ...nCounts,
        [cur]: Math.floor(t)
      }
      t -= Math.floor(t)
    } else {
      const diff = t - ringSizes[i]
      if (diff >= 0) {
        nCounts = {
          ...nCounts,
          [cur]: 1,
        }
        t = diff
      }
    }
  })

  return nCounts
}
