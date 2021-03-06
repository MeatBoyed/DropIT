class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }

  getHTTPCode() {
    switch (this.constructor) {
      case BadRequest:
        return 400;
      case EmptyProducts:
        return 204;
      default:
        return 500;
    }
  }
}

class BadRequest extends GeneralError {}
class EmptyProducts extends GeneralError {}

module.exports = {
  GeneralError,
  BadRequest,
  EmptyProducts,
};
