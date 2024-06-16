const zeros = (number) => {
  let resultado = 1;
  for (let i = 1; i <= number; i++) {
    resultado *= i;
  }
  console.log(BigInt(resultado))
  const numbers = resultado.toString().split('');
  console.log(numbers);
  const zeros = numbers.reverse().filter((number) => number === '0');
  console.log(numbers);
  return zeros;
}

console.log(zeros(30));