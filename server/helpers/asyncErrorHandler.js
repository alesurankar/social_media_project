// A higher-order function that wraps async route handlers.
// It automatically catches rejected Promises and forwards errors to Express.
// Prevents the need for repetitive try/catch blocks in every controller.

export default function asyncErrorHandler(fn) 
{
  return function(req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
