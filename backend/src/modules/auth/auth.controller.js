import { registerUser, loginUser } from "./auth.service.js";
import { registerSchema, loginSchema } from "./auth.validation.js";

export const register = async (req, res, next) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const data = await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token: data.token,
      user: data.user,
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body is missing",
      });
    }

    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const { email, password } = req.body;

    const data = await loginUser(email, password);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: data.token,
      user: data.user,
    });
  } catch (err) {
    next(err);
  }
};