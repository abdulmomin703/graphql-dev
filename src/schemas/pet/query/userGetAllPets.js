import { PetModel } from "../model.js";

export const userGetAllPets = async (_, { id }) => {
  let pets = await PetModel.find({ user: id });
  if (pets) {
    return pets;
  } else return [];
};
