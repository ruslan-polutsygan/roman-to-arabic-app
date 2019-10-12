const { ERROR_INTERNAL } = require('./errorCodes');

class HTTPError extends Error {
  constructor(httpCode = 500, errorCode = ERROR_INTERNAL, message = '') {
    super(message);
    this.httpCode = httpCode;
    this.errorCode = errorCode;
  }
}

function catchControllerError(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (e) {
      next(e);
    }
  };
}

module.exports = {
  HTTPError,
  catchControllerError,
};
