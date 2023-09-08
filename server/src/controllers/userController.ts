import express from "express";
import asyncHandler from "express-async-handler";
import db from "../db";
import bcrypt from "bcryptjs";

// @desc 	  Auth user & get token
// @route 	POST /api/users/auth
// @access 	Public
const authUser = asyncHandler(
	async (req: express.Request, res: express.Response) => {
		res.status(401);
		throw new Error("Not authorized");
	},
);

// @desc   Register a new user
// @route  POST /api/users/register
// @access Public
const registerUser = asyncHandler(
	async (req: express.Request, res: express.Response) => {
		const { firstName, middleName, lastName, username, password } = req.body;
		const userExists = await db.query(
			"SELECT * FROM account WHERE username = $1",
			[username],
		);

		if (userExists.rows.length > 0) {
			res.status(400);
			throw new Error("User already exists");
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = await db.query(
			"INSERT INTO account (first_name, middle_name,last_name, username, password) VALUES ($1, $2, $3, $4, $5) returning *",
			[firstName, middleName, lastName, username, hashedPassword],
		);

		res.status(200).json(newUser.rows[0]);
	},
);

// @desc   Logout user
// @route  POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(
	async (req: express.Request, res: express.Response) => {
		res.status(200).json({ message: "logged out" });
	},
);

// @desc   Get user profile
// @route  Get /api/users/profile
// @access Private
const getUserProfile = asyncHandler(
	async (req: express.Request, res: express.Response) => {
		res.status(200).json({ message: " user" });
	},
);

// @desc   Update user profile
// @route  Put /api/users/profile
// @access Private
const updatetUserProfile = asyncHandler(
	async (req: express.Request, res: express.Response) => {
		res.status(200).json({ message: "Udpate user" });
	},
);

export {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updatetUserProfile,
};
