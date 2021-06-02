fetch.ponyfill = true;

module.exports = exports = fetch;
exports.fetch = fetch;
exports.Headers = fetch.Headers;
exports.Request = fetch.Request;
exports.Response = fetch.Response;

// Needed for TypeScript consumers without esModuleInterop.
exports.default = fetch;
