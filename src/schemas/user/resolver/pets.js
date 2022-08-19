import { PetModel } from "../../pet/model.js";

export const pets = async (user, _) => {
  console.log("user");
  const petsList = PetModel.find({ user: user._id });
  console.log(user.id);
  return petsList;
};
