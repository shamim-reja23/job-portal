import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { getAllJobs, getJobById, getMyJobs, postJob } from "../controllers/job.controller.js";
import isRecruiter from "../middleware/isRecruiter.js";


const router = express.Router();

router.post("/", isAuthenticated, isRecruiter, postJob);

router.get("/my", isAuthenticated, isRecruiter, getMyJobs);
router.get("/", getAllJobs);
router.get("/:id", getJobById);

export default router;