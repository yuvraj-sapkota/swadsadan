import mongoose from "mongoose";

const OptionSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
});

const VariantGroupSchema = new mongoose.Schema({
  groupName: { type: String, required: true, trim: true },
  required: { type: Boolean, default: false },
  multiSelect: { type: Boolean, default: false },
  options: { type: [OptionSchema], default: [] },
});

const MenuSchema = new mongoose.Schema(
  {
    hotel: { type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required:true
    },
       
    name: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    category: {  
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
     },
    basePrice: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["available", "outofstock"],
      default: "available",
    },
    imageUrl: { type: String, default: "" },
    imagePublicId: { type: String, default: "" },
    variantGroups: { type: [VariantGroupSchema], default: [] },
  },
  { timestamps: true },
);

export default mongoose.model("Menu", MenuSchema);
