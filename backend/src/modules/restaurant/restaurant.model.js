import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },

    name: {
      type: String,
      required: true,
      trim: true
    },

    address: {
      type: String,
      required: true
    },

    contact: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    image: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Restaurant", restaurantSchema);