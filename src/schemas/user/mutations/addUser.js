import { UserModel } from "../model.js";
import { UserInputError } from "apollo-server-express";
import { fileUpload } from "../../../utils/fileUpload.js";
import path from "path";
import { fileURLToPath } from "url";
import { generateAuthTokens } from "../../../shared/token.service.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addUser = async (_, { input }) => {
  console.log("User Signed Up");
  const { username, password, profilePic } = input;
  let body = { username, password };

  const check = await UserModel.isUserNameTaken(username);
  if (!check) {
    if (profilePic) {
      const pathname = path.join(__dirname, `../../../../public/photos/users/`);
      const filename = await fileUpload(profilePic, pathname);
      body.profilePic = `http://localhost:4000/photos/users/${filename}`;
    }
    let user = await UserModel.create(body);

    const token = await generateAuthTokens(user);
    return { user: user, token: token };
  } else {
    throw new Error("Username Already Exists");
  }
};
