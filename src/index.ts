import assert from 'assert';

class HTTPError extends Error {
  statusCode: number;
  code: number;
  constructor(statusCode: number, message: string) {
    super(message);
    assert(statusCode >= 400, 'Not a valid HTTP error code');

    this.statusCode = statusCode;
    this.code = statusCode;
    this.message = message;
  }
}

function HTTPErrorFactory(defaultCode: number, defaultMessage: string) {

  function CustomHTTPErrorFactory(code: number, message: string): HTTPError;
  function CustomHTTPErrorFactory(message: string): HTTPError;
  function CustomHTTPErrorFactory(): HTTPError;
  function CustomHTTPErrorFactory(code?: number | string, message?: string): HTTPError {

    const customCode: number = typeof code === 'string' ? 404 : code as number;
    const customMessage: string = message ? message : code as string;

    return new HTTPError(customCode || defaultCode, customMessage || defaultMessage);
  }

  return CustomHTTPErrorFactory;
}

export const RateLimited = HTTPErrorFactory(429, 'Request rate limited');
export const NotFoundError = HTTPErrorFactory(404, 'Resource not found');
export const NotAuthorizedError = HTTPErrorFactory(401, 'Not authorized');
export const ForbiddenError = HTTPErrorFactory(403, 'Forbidden');
export const InternalError = HTTPErrorFactory(500, 'Internal error');
export const BadRequestError = HTTPErrorFactory(400, 'Bad request');
export const NotImplementedError = HTTPErrorFactory(501, 'Not implemented');
export const ServiceUnavailableError = HTTPErrorFactory(503, 'Service Unavailable');
export const TransferRateError = HTTPErrorFactory(420, 'Transfer rate limit');
export const ConflictError = HTTPErrorFactory(409, 'Conflict');
export const UnprocessableEntityError = HTTPErrorFactory(422, 'Unprocessable entity');
