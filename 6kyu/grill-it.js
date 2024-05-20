const grillIt = (message, code) => {
  let binary = code.toString(2);
  let messageDecrypted = ''

  if (binary.length > message.length) {
    binary = binary.split('').slice(binary.length - message.length).join('');
  }

  if (binary.length < message.length) {
    const diff = message.length - binary.length;
    const ceros = '0'.repeat(diff);
    binary = ceros + binary;
  }

  for (let i = 0; i < message.length; i++) {
    if (binary[i] === '1') {
      messageDecrypted += message[i];
    }
  }

  return messageDecrypted;

}

console.log(grillIt("ab", 256));