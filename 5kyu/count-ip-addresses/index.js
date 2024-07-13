const ipsBetween = (start, end) => {
  const startIp = start.split('.').map(Number);
  const endIp = end.split('.').map(Number);

  const startValue = startIp.map((num, index) => num * Math.pow(256, 3 - index)).reduce((acc, curr) => acc + curr);
  const endValue = endIp.map((num, index) => num * Math.pow(256, 3 - index)).reduce((acc, curr) => acc + curr);

  if (startValue > endValue) return startValue - endValue;
  return endValue - startValue;
}

console.log(ipsBetween("1.2.3.4", "5.6.7.8"))