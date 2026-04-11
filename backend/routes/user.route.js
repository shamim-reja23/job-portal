import express from "express"
import { register, login, logout, updateProfile } from "../controllers/user.controller.js"
import isAuthenticated from "../middleware/isAuthenticated.js"
import { singleUpload } from "../middleware/multer.js"


const router = express.Router()

router.post("/auth/register", singleUpload, register)
router.post("/auth/login", login)
router.post("/auth/logout", isAuthenticated, logout)

router.put("/profile", isAuthenticated, updateProfile)



export default router;