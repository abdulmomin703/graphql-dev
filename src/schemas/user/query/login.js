import { UserModel } from "../model.js";
import { logger } from "../../../config/logger.js";
import { generateAuthTokens } from "../../../shared/token.service.js";

export const login = async (_, { input }, context) => {
  const { request, test } = context;

  console.log("Login hit");
  const { username, password } = input;

  let user = await UserModel.findOne({ username: username });
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new Error("Incorrect Email or Password.");
  }

  const token = await generateAuthTokens(user);
  return { user: user, token: token };
};
