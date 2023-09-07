import express from "express";

// @desc 	Auth user & get token
// @route 	POST /api/users/auth
// @access 	Public
const authUser = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction,
) => {
	res.send(200).json({ message: "Auth user" });
	next();
};

export { authUser };
