module.exports = function toReadable(number) {
  if (Number.isFinite(number) && Number.isInteger(number)) {
    number = number.toString().split('').map(Number);
    let c = number.length;
  } else return false;
  let result = [];
  let numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  }
  let preffix = ['teen','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
  for (let i = 0; i < number.length; i++) {
    if (c === 3) {
      result.push(`${numbers[number[i]]} hundred`);
      c--;
    }
    if (c === 2) {
      result.push(`${numbers[number[i]]}`);
      c--;
    }
    if (c === 1) {
      result.push(`${numbers[number[i]]}`);
      c--;
    }
  }
  return result.join('');
}
