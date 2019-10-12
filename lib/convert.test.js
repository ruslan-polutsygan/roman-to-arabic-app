jest.mock('roman-to-arabic-numerals');

const { romanToInt } = require('roman-to-arabic-numerals');
const lib = require('./convert');

describe('Convert lib wrapper', () => {
  it('should proxy conversion to "roman-to-arabic-numerals::romanToInt"', () => {
    romanToInt.mockImplementation(() => 'result');

    const arabic = lib.romanToArabic('anything');

    expect(arabic).toEqual('result');
    expect(romanToInt).toBeCalledWith('anything');
  });

  it('should return null if "roman-to-arabic-numerals::romanToInt" return "Invalid Input"', () => {
    romanToInt.mockImplementation(() => 'Invalid Input');

    const arabic = lib.romanToArabic('anything');

    expect(arabic).toEqual(null);
    expect(romanToInt).toBeCalledWith('anything');
  });

  it('should cast arg to string before calling "roman-to-arabic-numerals::romanToInt"', () => {
    romanToInt.mockImplementation(() => 'Invalid Input');

    lib.romanToArabic(34);

    expect(romanToInt).toBeCalledWith('34');
  });
});
