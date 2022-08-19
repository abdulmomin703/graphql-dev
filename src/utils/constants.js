const errorName = {
  USER_ALREADY_EXISTS: "USER_ALREADY_EXISTS",
  SERVER_ERROR: "SERVER_ERROR",
};

const errorType = {
  USER_ALREADY_EXISTS: {
    message: "Username already exists.",
    statusCode: 403,
  },
  SERVER_ERROR: {
    message: "Server error.",
    statusCode: 500,
  },
};

export { errorName, errorType };
