"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = exports.registerService = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registerService = async (name, email, password, role) => {
    const exists = await User_1.default.findOne({ email });
    if (exists)
        throw new Error("User already exists");
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const user = await User_1.default.create({
        name,
        email,
        role,
        password: hashedPassword,
    });
    return user;
};
exports.registerService = registerService;
const loginService = async (email, password) => {
    const user = await User_1.default.findOne({ email });
    if (!user)
        throw new Error("Invalid email or password");
    const match = await bcrypt_1.default.compare(password, user.password);
    if (!match)
        throw new Error("Invalid email or password");
    const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    return { token, user };
};
exports.loginService = loginService;
