
const convert = require('../../lib/convert');
const { HTTPError, catchControllerError } = require('../../lib/errors');
const { ERROR_BAD_INPUT, ERROR_ROMAN_PROPERTY_MISSING } = require('./conversion.errorCodes');

const convertRomanToArabic = catchControllerError((req, res) => {
  const { roman } = req.body;
  if (!roman) {
    throw new HTTPError(400, ERROR_ROMAN_PROPERTY_MISSING);
  }

  const arabic = convert.romanToArabic(roman);
  if (!arabic) {
    throw new HTTPError(400, ERROR_BAD_INPUT);
  }

  return res.json({
    arabic,
  });
});

module.exports = {
  convertRomanToArabic,
};
