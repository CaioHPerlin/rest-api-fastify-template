import { drizzle } from "drizzle-orm/node-postgres";
import env from "../config/env.ts";

const db = drizzle(env.POSTGRES_URL);

export default db;