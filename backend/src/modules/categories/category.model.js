import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
      
      },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: String,

    status: {
      type: String,
      enum: ["active", "hidden"],
      default: "active",
    },
    priority: {
      type: Number,
      default: 1,
    },
    image: {
      type: String,
    },
    imagePublicId: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Category", categorySchema);
