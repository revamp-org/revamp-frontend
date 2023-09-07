import express from "express";
import { authUser } from "../controllers/userController";

const router = express.Router();

router.post("/auth");

export default router;
