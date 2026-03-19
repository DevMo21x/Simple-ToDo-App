import dotenv from "dotenv";
import { Pool } from "pg";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const dbConnection = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB,
  max: 10,
  idleTimeoutMillis: 3000,
  connectionTimeoutMillis: 2000,
});

export default dbConnection;
