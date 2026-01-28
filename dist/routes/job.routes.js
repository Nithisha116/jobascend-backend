"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const job_controller_1 = require("../controllers/job.controller");
const express_1 = require("express");
const job_controller_2 = require("../controllers/job.controller");
const router = (0, express_1.Router)();
router.post("/post", job_controller_2.createJob);
router.get("/all", job_controller_2.getAllJobs);
router.get("/my-jobs/:id", job_controller_2.getMyJobs);
router.delete("/delete/:id", job_controller_2.deleteJob); // ← NEW
router.put("/update/:id", job_controller_1.updateJob);
exports.default = router;
