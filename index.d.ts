declare class HTTPError extends Error {
    statusCode: number;
    code: number;
    constructor(statusCode: number, message: string);
}
export declare const RateLimited: {
    (code: number, message: string): HTTPError;
    (message: string): HTTPError;
    (): HTTPError;
};
export declare const NotFoundError: {
    (code: number, message: string): HTTPError;
    (message: string): HTTPError;
    (): HTTPError;
};
export declare const NotAuthorizedError: {
    (code: number, message: string): HTTPError;
    (message: string): HTTPError;
    (): HTTPError;
};
export declare const ForbiddenError: {
    (code: number, message: string): HTTPError;
    (message: string): HTTPError;
    (): HTTPError;
};
export declare const InternalError: {
    (code: number, message: string): HTTPError;
    (message: string): HTTPError;
    (): HTTPError;
};
export declare const BadRequestError: {
    (code: number, message: string): HTTPError;
    (message: string): HTTPError;
    (): HTTPError;
};
export declare const NotImplementedError: {
    (code: number, message: string): HTTPError;
    (message: string): HTTPError;
    (): HTTPError;
};
export declare const ServiceUnavailableError: {
    (code: number, message: string): HTTPError;
    (message: string): HTTPError;
    (): HTTPError;
};
export declare const TransferRateError: {
    (code: number, message: string): HTTPError;
    (message: string): HTTPError;
    (): HTTPError;
};
export declare const ConflictError: {
    (code: number, message: string): HTTPError;
    (message: string): HTTPError;
    (): HTTPError;
};
export declare const UnprocessableEntityError: {
    (code: number, message: string): HTTPError;
    (message: string): HTTPError;
    (): HTTPError;
};
export {};
