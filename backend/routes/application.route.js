import express from "express";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import isRecruiter from "../middleware/isRecruiter.js";


const router = express.Router();

router.post("/:id/apply", isAuthenticated, applyJob);
router.get("/", isAuthenticated, getAppliedJobs);

router.get("/:id/applicants", isAuthenticated, isRecruiter, getApplicants);
router.patch("/:id/status", isAuthenticated, isRecruiter, updateStatus)



export default router;