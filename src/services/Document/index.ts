function isValidDocument(document) {
  return validCPF(document) || validCNPJ(document);
}

const isRepeatingNumber = str => /^(\d)(\1){10}$/.test(str);

function validCPF(input) {
  const cpf = input.replace(/\D/g, '');

  if (
    cpf === '' ||
    cpf.length !== 11 ||
    !/^\d{11}$/.test(cpf) ||
    isRepeatingNumber(cpf)
  ) {
    return false;
  }

  const digits = cpf.split('').map(x => parseInt(x));

  for (let j = 0; j < 2; j++) {
    let sum = 0;

    for (let i = 0; i < 9 + j; i++) {
      sum += digits[i] * (10 + j - i);
    }

    let checkDigit = 11 - (sum % 11);

    if (checkDigit === 10 || checkDigit === 11) {
      checkDigit = 0;
    }

    if (checkDigit !== digits[9 + j]) {
      return false;
    }
  }

  return true;
}

function validCNPJ(value) {
  let cnpj = value;

  cnpj = cnpj.replace(/\./g, '');
  cnpj = cnpj.replace('-', '');
  cnpj = cnpj.replace('/', '');

  let v1 = 0;
  let v2 = 0;
  let aux = false;

  for (var i = 1; cnpj.length > i; i++) {
    if (cnpj[i - 1] !== cnpj[i]) {
      aux = true;
    }
  }

  if (aux === false) {
    return false;
  }

  for (var j = 0, p1 = 5, p2 = 13; cnpj.length - 2 > j; j++, p1--, p2--) {
    if (p1 >= 2) {
      v1 += cnpj[j] * p1;
    } else {
      v1 += cnpj[j] * p2;
    }
  }

  v1 = v1 % 11;

  if (v1 < 2) {
    v1 = 0;
  } else {
    v1 = 11 - v1;
  }

  if (v1 !== cnpj[12]) {
    return false;
  }

  for (var k = 0, pa1 = 6, pa2 = 14; cnpj.length - 1 > k; k++, pa1--, pa2--) {
    if (p1 >= 2) {
      v2 += cnpj[k] * pa1;
    } else {
      v2 += cnpj[k] * pa2;
    }
  }

  v2 = v2 % 11;

  if (v2 < 2) {
    v2 = 0;
  } else {
    v2 = 11 - v2;
  }

  if (v2 !== cnpj[13]) {
    return false;
  } else {
    return true;
  }
}

export { isValidDocument };
