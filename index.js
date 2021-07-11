"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableEntityError = exports.ConflictError = exports.TransferRateError = exports.ServiceUnavailableError = exports.NotImplementedError = exports.BadRequestError = exports.InternalError = exports.ForbiddenError = exports.NotAuthorizedError = exports.NotFoundError = exports.RateLimited = void 0;
var assert_1 = __importDefault(require("assert"));
var HTTPError = /** @class */ (function (_super) {
    __extends(HTTPError, _super);
    function HTTPError(statusCode, message) {
        var _this = _super.call(this, message) || this;
        assert_1.default(statusCode >= 400, 'Not a valid HTTP error code');
        _this.statusCode = statusCode;
        _this.code = statusCode;
        _this.message = message;
        return _this;
    }
    return HTTPError;
}(Error));
function HTTPErrorFactory(defaultCode, defaultMessage) {
    function CustomHTTPErrorFactory(code, message) {
        var customCode = typeof code === 'string' ? 404 : code;
        var customMessage = message ? message : code;
        return new HTTPError(customCode || defaultCode, customMessage || defaultMessage);
    }
    return CustomHTTPErrorFactory;
}
exports.RateLimited = HTTPErrorFactory(429, 'Request rate limited');
exports.NotFoundError = HTTPErrorFactory(404, 'Resource not found');
exports.NotAuthorizedError = HTTPErrorFactory(401, 'Not authorized');
exports.ForbiddenError = HTTPErrorFactory(403, 'Forbidden');
exports.InternalError = HTTPErrorFactory(500, 'Internal error');
exports.BadRequestError = HTTPErrorFactory(400, 'Bad request');
exports.NotImplementedError = HTTPErrorFactory(501, 'Not implemented');
exports.ServiceUnavailableError = HTTPErrorFactory(503, 'Service Unavailable');
exports.TransferRateError = HTTPErrorFactory(420, 'Transfer rate limit');
exports.ConflictError = HTTPErrorFactory(409, 'Conflict');
exports.UnprocessableEntityError = HTTPErrorFactory(422, 'Unprocessable entity');
