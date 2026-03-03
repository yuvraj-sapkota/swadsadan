import User from "./auth.model.js";
import generateToken from "../../utils/generateToken.js";

export const registerUser = async (data) => {
  const userExists = await User.findOne({
    $or: [{ email: data.email }, { phone: data.phone }],
  });

  if (userExists) {
    throw new Error("User already exists");
  }

  const user = await User.create(data);
  const token = generateToken(user._id);

  return { user, token };
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.comparePassword(password))) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken(user._id);

  return { user, token };
};
