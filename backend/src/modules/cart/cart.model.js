import mongoose from "mongoose";

const SelectedOptionSchema = new mongoose.Schema({
  groupName: String,
  optionName: String,
  price: { type: Number, default: 0 },
});

const CartItemSchema = new mongoose.Schema({
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
    required: true,
  },
  quantity: { type: Number, required: true, min: 1 },
  selectedOptions: { type: [SelectedOptionSchema], default: [] },
});

const cartSchema = new mongoose.Schema(
  {
    tableNumber: { type: Number, required: true },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },

    items: { type: [CartItemSchema], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);