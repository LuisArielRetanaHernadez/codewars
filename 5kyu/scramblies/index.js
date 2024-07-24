const scramble = (str1, str2) => {
  const charsStr2 = str2.split('')
  const str2Serialized = str1.split('').map((char) => {
    if (charsStr2.includes(char)) {
      charsStr2.splice(charsStr2.indexOf(char), 1)
      return char
    }
  }).join('')
  console.log(str2Serialized)
}
scramble('scriptaajavx', 'javascript')