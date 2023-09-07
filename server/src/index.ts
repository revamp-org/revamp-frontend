import express, { NextFunction, Request, Response } from "express";
import db from "./db";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

db.connect((err) => {
	if (err) {
		console.log("connection error", err.stack);
	} else {
		console.log("Connected to database");
		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	}
});

app.post("/api/users", (req: Request, res: Response) => res.send("server is ready");
