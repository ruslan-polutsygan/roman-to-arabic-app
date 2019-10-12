const convert = require('roman-to-arabic-numerals');

const INVALID_INPUT = 'Invalid Input';

function romanToArabic(number) {
  const arabic = convert.romanToInt(number.toString());

  if (arabic === INVALID_INPUT) {
    return null;
  }

  return arabic;
}

module.exports = {
  romanToArabic,
};
