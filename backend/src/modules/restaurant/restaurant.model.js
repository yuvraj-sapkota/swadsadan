import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
     
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
      type: String
    },

    description: {
      type: String
    },

    image: {
      type: String
    },
     imagePublicId: {  
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Restaurant", restaurantSchema);