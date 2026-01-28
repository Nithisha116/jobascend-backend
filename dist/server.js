"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ats_routes_1 = __importDefault(require("./routes/ats.routes"));
const application_routes_1 = __importDefault(require("./routes/application.routes"));
const upload_routes_1 = __importDefault(require("./routes/upload.routes"));
const job_routes_1 = __importDefault(require("./routes/job.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// ==============================
// ✅ CORS MUST COME FIRST
// ==============================
app.use((0, cors_1.default)({
    origin: "http://127.0.0.1:5500", // your Live Server URL
    credentials: true,
}));
// ==============================
// Middleware
// ==============================
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// ==============================
// Routes
// ==============================
app.use("/api/auth", auth_routes_1.default);
app.use("/api/jobs", job_routes_1.default);
app.use("/api/upload", upload_routes_1.default);
app.use("/api/applications", application_routes_1.default);
app.use("/api/ats", ats_routes_1.default);
// ==============================
// Server + MongoDB
// ==============================
const PORT = process.env.PORT || 5000;
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.log("❌ MongoDB Error:", err));
app.listen(PORT, () => {
    console.log(`🔥 Server running at http://localhost:${PORT}`);
});
