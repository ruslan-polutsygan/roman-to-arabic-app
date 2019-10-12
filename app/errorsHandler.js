/* eslint-disable no-unused-vars */
const { HTTPError } = require('../lib/errors');

module.exports = (err, req, res, next) => {
  if (err instanceof HTTPError) {
    return res.status(err.httpCode)
      .json({
        code: err.errorCode,
        ...(err.message ? { message: err.message } : {}),
      });
  }

  return res.status(500)
    .json({
      code: 'ERROR_INTERNAL_ERROR',
    });
};
