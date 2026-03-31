import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { getAllJobs, getJobById, getMyJobs, postJob } from "../controllers/job.controller.js";


const router = express.Router();


router.post("/", isAuthenticated, postJob);

router.get("/my", isAuthenticated, getMyJobs);
router.get("/", getAllJobs);
router.get("/:id", getJobById);

export default router;