'use strict';

var expect = require('chai').expect;
var errorTypes = require('../index');

describe('errorTypes', function() {
  it('should have error types', function () {
    expect(errorTypes).to.have.property('NotFoundError');
    expect(errorTypes).to.have.property('NotAuthorizedError');
    expect(errorTypes).to.have.property('InternalError');
    expect(errorTypes).to.have.property('NotImplementedError');
    expect(errorTypes).to.have.property('ServiceUnavailableError');
    expect(errorTypes).to.have.property('TransferRateError');
  });

  it('should accept a custom message', function () {
    var NotFoundError = new errorTypes.NotFoundError('These are not the' +
      ' droids you are looking for');
    expect(NotFoundError.code).to.equal(404);
    expect(NotFoundError.statusCode).to.equal(404);
    expect(NotFoundError.message).to.equal('These are not the' +
      ' droids you are looking for');
  });

  describe('NotFoundError', function () {
    it('should have default props', function () {
      var NotFoundError = new errorTypes.NotFoundError();
      expect(NotFoundError.code).to.equal(404);
      expect(NotFoundError.statusCode).to.equal(404);
      expect(NotFoundError.message).to.equal('Resource not found');
    });
  });

  describe('NotAuthorizedError', function () {
    it('should have default props', function () {
      var NotAuthorizedError = new errorTypes.NotAuthorizedError();
      expect(NotAuthorizedError.code).to.equal(401);
      expect(NotAuthorizedError.statusCode).to.equal(401);
      expect(NotAuthorizedError.message).to.equal('Not authorized');
    });
  });

  describe('ForbiddenError', function () {
    it('should have default props', function () {
      var NotAuthorizedError = new errorTypes.ForbiddenError();
      expect(NotAuthorizedError.code).to.equal(403);
      expect(NotAuthorizedError.statusCode).to.equal(403);
      expect(NotAuthorizedError.message).to.equal('Forbidden');
    });
  });

  describe('InternalError', function () {
    it('should have default props', function () {
      var InternalError = new errorTypes.InternalError();
      expect(InternalError.code).to.equal(500);
      expect(InternalError.statusCode).to.equal(500);
      expect(InternalError.message).to.equal('Internal error');
    });
  });

  describe('BadRequestError', function () {
    it('should have default props', function () {
      var BadRequestError = new errorTypes.BadRequestError();
      expect(BadRequestError.code).to.equal(400);
      expect(BadRequestError.statusCode).to.equal(400);
      expect(BadRequestError.message).to.equal('Bad request');
    });
  });

  describe('NotImplementedError', function () {
    it('should have default props', function () {
      var NotImplementedError = new errorTypes.NotImplementedError();
      expect(NotImplementedError.code).to.equal(501);
      expect(NotImplementedError.statusCode).to.equal(501);
      expect(NotImplementedError.message).to.equal('Not implemented');
    });
  });

  describe('ServiceUnavailableError', function () {
    it('should have default props', function () {
      var ServiceUnavailableError = new errorTypes.ServiceUnavailableError();
      expect(ServiceUnavailableError.code).to.equal(503);
      expect(ServiceUnavailableError.statusCode).to.equal(503);
      expect(ServiceUnavailableError.message).to.equal('Service Unavailable');
    });
  });

  describe('TransferRateError', function () {
    it('should have default props', function () {
      var TransferRateError = new errorTypes.TransferRateError();
      expect(TransferRateError.code).to.equal(420);
      expect(TransferRateError.statusCode).to.equal(420);
      expect(TransferRateError.message).to.equal('Transfer rate limit');
    });
  });

  describe('ConflictError', function () {
    it('should have default props', function () {
      var ConflictError = new errorTypes.ConflictError();
      expect(ConflictError.code).to.equal(409);
      expect(ConflictError.statusCode).to.equal(409);
      expect(ConflictError.message).to.equal('Conflict');
    });
  });

  describe('UnprocessableEntity', function () {
    it('should have default props', function () {
      var UnprocessableEntityError = new errorTypes.UnprocessableEntityError();
      expect(UnprocessableEntityError.code).to.equal(422);
      expect(UnprocessableEntityError.statusCode).to.equal(422);
      expect(UnprocessableEntityError.message).to.equal('Unprocessable entity');
    });
  });
});
