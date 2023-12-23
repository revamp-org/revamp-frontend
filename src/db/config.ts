import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
	connectionString: process.env.DATABASE_URL!,
});

client.connect((err) => {
	if (err) {
		console.log("connection error", err.stack);
	} else {
		console.log("connected");
	}
});

const db = drizzle(client);

export default db;