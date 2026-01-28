"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const application_controller_1 = require("../controllers/application.controller");
const router = (0, express_1.Router)();
router.get("/recruiter/:id", application_controller_1.getApplicationsByRecruiter);
router.put("/update-status/:id", application_controller_1.updateApplicationStatus);
exports.default = router;
