const { GeneralError } = require('../ErrorHandler');

const errorHandler = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    let ErrorCode = err.getHTTPCode();
    return res.status(ErrorCode).json({
      status: ErrorCode,
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err.message,
  });
};

module.exports = errorHandler;
