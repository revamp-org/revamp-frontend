import express from "express";
import {
	authUser,
	getUserProfile,
	logoutUser,
	registerUser,
	updatetUserProfile,
} from "../controllers/userController";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updatetUserProfile);

export default router;
