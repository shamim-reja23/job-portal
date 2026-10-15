import express from "express"
import { register, login, logout, updateProfile } from "../controllers/user.controller.js"
import isAuthenticated from "../middleware/isAuthenticated.js"
import { uploadFields } from "../middleware/multer.js"


const router = express.Router()

router.post("/auth/register", register)
router.post("/auth/login", login)
router.post("/auth/logout", logout)

router.put("/profile/update", isAuthenticated, uploadFields, updateProfile)



export default router;