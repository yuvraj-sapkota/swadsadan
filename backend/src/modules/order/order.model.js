import mongoose from "mongoose";

const SelectedOptionSchema = new mongoose.Schema({
  groupName: String,
  optionName: String,
  price: Number,
});

const OrderItemSchema = new mongoose.Schema({
  menu: { type: mongoose.Schema.Types.ObjectId, ref: "Menu" },
  quantity: Number,
  selectedOptions: [SelectedOptionSchema],
});

const orderSchema = new mongoose.Schema(
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

    items: [OrderItemSchema],

    status: {
      type: String,
      enum: ["pending", "confirmed", "preparing", "served", "cancelled"],
      default: "pending",
    },

    totalAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);