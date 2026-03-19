import User from "./auth.model.js";
import generateToken from "../../utils/generateToken.js";
import { OAuth2Client } from "google-auth-library";


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

  const userObj = user.toObject();

  delete userObj.password;

  return { user: userObj, token };
};




const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLoginUser = async (idToken) => {
  if (!idToken) {
    throw new Error("Google token missing");
  }

  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  const { sub: googleId, email, name, picture } = payload;

  let user = await User.findOne({ email });

  if (user) {
    // 🔗 Link Google account if not linked
    if (!user.googleId) {
      user.googleId = googleId;
      user.image = picture;
      await user.save();
    }
  } else {
    user = await User.create({
      name,
      email,
      googleId,
      image: picture,
    });
  }

  const token = generateToken(user._id);

  const userObj = user.toObject();
  delete userObj.password;

  return { user: userObj, token };
};