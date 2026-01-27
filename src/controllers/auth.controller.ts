import { Request, Response } from "express";
import { loginService, registerService } from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;

    if (!role) {
      return res.status(400).json({ success: false, message: "Role is required" });
    }

    const user = await registerService(name, email, password, role);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const { token, user } = await loginService(email, password);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.json({
      success: true,
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};
