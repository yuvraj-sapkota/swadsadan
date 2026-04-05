import mongoose from "mongoose";

const SelectedOptionSchema = new mongoose.Schema({
  groupName: String,   
  optionName: String, 
  price: Number,     
});

const OrderItemSchema = new mongoose.Schema({
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
    min: 1,
  },

  selectedOptions: {
    type: [SelectedOptionSchema],
    default: [],
  },
});

const orderSchema = new mongoose.Schema(
  {
    tableNumber: {
      type: Number,
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    items: [OrderItemSchema],

    status: {
      type: String,
      enum: ["pending", "preparing", "served"],
      default: "pending",
    },

    totalAmount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);