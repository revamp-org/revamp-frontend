import express, { Request, Response } from "express"
import client from "./db"
const app = express();


// middleware
app.use(express.json())


app.listen(5000, () => {
	console.log("server listening in port 5000");
}) 
