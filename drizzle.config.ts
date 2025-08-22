import { defineConfig } from "drizzle-kit";
import env from "./src/config/env.ts";

export default defineConfig({
    out: "./migrations",
    schema: "./src/database/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: env.POSTGRES_URL,
    },
});
