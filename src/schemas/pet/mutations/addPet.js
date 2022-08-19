import { PetModel } from "../model.js";
import path from "path";
import { fileURLToPath } from "url";
import { fileUpload } from "../../../utils/fileUpload.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addPet = async (_, { input }) => {
  console.log("Add Pet Hit");
  const { type, name, user, picture } = input;
  let body = { type, name, user };

  if (picture) {
    const pathname = path.join(__dirname, `../../../../public/photos/pet/`);
    const filename = await fileUpload(picture, pathname);
    body.picture = `http://localhost:4000/photos/pet/${filename}`;
  }

  let pet = await PetModel.create(body);
  return pet;
};
