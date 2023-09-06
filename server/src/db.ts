import { Client } from "pg";
import "dotenv/config";

const db = new Client({
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	host: process.env.PGHOST,
	port: +process.env.PGPORT!,
	database: process.env.PGDATABASE,
});

export default db;
