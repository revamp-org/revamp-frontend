import { Client } from 'pg';
import 'dotenv/config'



const client = new Client({
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	host: process.env.PGHOST,
	port: +process.env.PGPORT!,
	database: process.env.PGDATABASE
})

client.connect((err) => {
	if (err) {
		console.log('connection error', err.stack)
	} else {
		console.log('connected')
	}

})

export default client;
