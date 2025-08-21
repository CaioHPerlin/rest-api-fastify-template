import fastify from "fastify";
import crypto from "node:crypto";
import logger from "./config/logger.ts";
import env from "./config/env.ts";

const server = fastify({
    logger: logger,
});

server.get("/ping", (_, reply) => {
    return reply.status(200).send({
        message: `pong!`,
        foo: crypto.randomUUID(),
    });
});

server.listen({ port: env.PORT });
