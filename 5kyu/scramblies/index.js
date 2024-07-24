const scramble = (str1, str2) => {
  const str1Array = str1.split('')
  const str2Array = str2.split('')
  const str1Obj = {}
  const str2Obj = {}

  for (let i = 0; i < str1Array.length; i++) {
    const char = str1Array[i]
    str1Obj[char] = (str1Obj[char] || 0) + 1
  }

  for (let i = 0; i < str2Array.length; i++) {
    const char = str2Array[i]
    str2Obj[char] = (str2Obj[char] || 0) + 1
  }

  for (const char in str2Obj) {
    if (!str1Obj[char] || str1Obj[char] < str2Obj[char]) return false
  }

  return true
}
console.log(scramble('rkoqdlw', 'world'))