import express from "express";
import db from "./db";
import "dotenv/config";
import userRoutes from "./routes/userRoutes";
import { notFound, errorHandler } from "./middleware/errorMiddleware";

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect db
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

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);
