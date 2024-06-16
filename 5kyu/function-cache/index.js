const cache = (fn) => {
  const cache = new Map()
  // const cache = {}
  return (...args) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = fn.apply(this, args)
    cache.set(key, result)
    // cache[key] = result
    return result
  }
}

const sum = (a, b) => a + b
const cachedSum = cache(sum)
console.log(cachedSum(2, 3))
console.log(cachedSum(2, 3))
console.log(cachedSum(3, 3))