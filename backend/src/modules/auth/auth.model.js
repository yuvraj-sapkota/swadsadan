import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const authSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    address: { type: String },
    gender: { type: String, enum: ["male", "female", "other"] },
    phone: { type: String },

    role: {
      type: String,
      enum: ["user", "admin", "resturentOwner"],
      default: "user",
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      minlength: 6,
      select: false,
      required: function () {
        return !this.googleId; // 🔥 important
      },
    },

    googleId: {
      type: String,
    },

    image: {
      type: String,
    },
  },
  { timestamps: true },
);

authSchema.pre("save", async function () {
  if (!this.isModified("password") || !this.password) return;

  this.password = await bcrypt.hash(this.password, 10);
});

authSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", authSchema);
