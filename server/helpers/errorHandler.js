// A custom class that extends the native Error object.
// It allows you to attach an HTTP statusCode to errors.
// Used to create structured, consistent API error responses.

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;