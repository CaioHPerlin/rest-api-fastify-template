import { z } from "zod";

const environmentSchema = z.object({
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    PORT: z.coerce.number().default(3001),

    POSTGRES_DB: z.string().min(1),
    POSTGRES_HOST: z.string().default("localhost"),
    POSTGRES_USER: z.string().default("postgres"),
    POSTGRES_PASSWORD: z.string().min(1),
    POSTGRES_PORT: z.coerce.number().default(5432),
});

const parsedEnv = environmentSchema.safeParse(process.env);
if (!parsedEnv.success) {
    console.error("Invalid environment variables:\n", z.treeifyError(parsedEnv.error).properties);
    throw new Error("Invalid environment configuration.");
}

const env = parsedEnv.data;

function buildPostgresUrl({
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_HOST,
    POSTGRES_PORT,
    POSTGRES_DB,
}: typeof env): string {
    return `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`;
}

export default {
    ...env,
    POSTGRES_URL: buildPostgresUrl(env),
};
