import mongoose from "mongoose";

const petSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "user",
    },
    picture: {
      type: String,
      required: false,
      trim: true,
    },
  },

  {
    timestamps: true,
  }
);

export const PetModel = mongoose.model("pet", petSchema);
