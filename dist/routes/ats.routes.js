"use strict";
// routes/ats.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ats_controller_1 = require("../controllers/ats.controller");
const router = express_1.default.Router();
router.post("/calculate", ats_controller_1.calculateATSScore);
exports.default = router;
