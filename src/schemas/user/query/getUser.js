import { UserModel } from "../model.js";
import { UserInputError } from "apollo-server-express";

export const getUser = async (_, { id }) => {
  let user = await UserModel.findById(id);
  if (user) {
    return user;
  } else throw new UserInputError("User Not Found");
};
