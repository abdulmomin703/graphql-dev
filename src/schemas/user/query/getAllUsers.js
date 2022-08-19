import { UserModel } from "../model.js";
import { logger } from "../../../config/logger.js";

export const getAllUsers = async (_, args, context) => {
  logger.debug(`[context keys  ] - ${Object.keys(context)}`);
  logger.debug(
    `[context header] - ${
      context.headers ? Object.keys(context.headers) : null
    }`
  );
  logger.debug(
    `[context header authorizaton] - ${
      context.headers && context.headers.authorization
        ? context.headers.authorization
        : null
    }`
  );

  let users = await UserModel.find();
  return users;
};
