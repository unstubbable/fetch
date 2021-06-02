module.exports = exports = fetch.bind(window);
exports.fetch = fetch.bind(window);
exports.Headers = fetch.Headers;
exports.Request = fetch.Request;
exports.Response = fetch.Response;

// Needed for TypeScript consumers without esModuleInterop.
exports.default = fetch.bind(window);
