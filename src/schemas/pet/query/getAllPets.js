import { PetModel } from "../model.js";

export const getAllPets = async () => {
  let pets = await PetModel.find();
  if (pets) {
    return pets;
  } else return [];
};
