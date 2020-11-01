/**
 * @module inxt-bridge/server/errors
 */

'use strict';

const assert = require('assert');
const inherits = require('util').inherits;

function HTTPErrorFactory(code, defaultMessage) {
  /**
   * Error constructor for creating error objects with a given status code
   * @param {Number} statusCode - The HTTP status code
   * @param {String} message - The default error message
   */
  function HTTPError(statusCode, message) {
    if (!(this instanceof HTTPError)) {
      return new HTTPError(statusCode, message);
    }

    assert(statusCode >= 400, 'Not a valid HTTP error code');

    this.statusCode = statusCode;
    this.code = statusCode;
    this.message = message || defaultMessage;
  }

  inherits(HTTPError, Error);

  let args = [HTTPError, code];

  return HTTPError.bind.apply(HTTPError, args);
}

module.exports.RateLimited = HTTPErrorFactory(
  429,
  'Request rate limited'
);

module.exports.NotFoundError = HTTPErrorFactory(
  404,
  'Resource not found'
);

module.exports.NotAuthorizedError = HTTPErrorFactory(
  401,
  'Not authorized'
);

module.exports.ForbiddenError = HTTPErrorFactory(
  403,
  'Forbidden'
);

module.exports.InternalError = HTTPErrorFactory(
  500,
  'Internal error'
);

module.exports.BadRequestError = HTTPErrorFactory(
  400,
  'Bad request'
);

module.exports.NotImplementedError = HTTPErrorFactory(
  501,
  'Not implemented'
);

module.exports.ServiceUnavailableError = HTTPErrorFactory(
  503,
  'Service Unavailable'
);

module.exports.TransferRateError = HTTPErrorFactory(
  420,
  'Transfer rate limit'
);

module.exports.ConflictError = HTTPErrorFactory(
  409,
  'Conflict'
);

module.exports.UnprocessableEntityError = HTTPErrorFactory(
  422,
  'Unprocessable entity'
);
