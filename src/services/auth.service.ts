import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerService = async (
  name: string,
  email: string,
  password: string,
  role: string
) => {
  const exists = await User.findOne({ email });
  if (exists) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    role,
    password: hashedPassword,
  });

  return user;
};

export const loginService = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid email or password");

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  return { token, user };
};
