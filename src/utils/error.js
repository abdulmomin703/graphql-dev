import { errorType } from "./constants.js";

export const getErrorCode = (errorName) => {
  return errorType[errorName];
};
