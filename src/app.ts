import fastify from "fastify";
import logger from "./config/logger.ts";
import v1Routes from "./api/v1/index.ts";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";

export default async function buildApp(): Promise<fastify.FastifyInstance> {
    const app = fastify({ logger });

    app.setValidatorCompiler(validatorCompiler);
    app.setSerializerCompiler(serializerCompiler);

    app.register(v1Routes, { prefix: '/v1' });

    return app;
}
