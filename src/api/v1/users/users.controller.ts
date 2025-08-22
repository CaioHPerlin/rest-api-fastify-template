import fastify from "fastify";
import db from "../../../database/client.ts";
import { users } from "../../../database/schema.ts";

const usersController = async (app: fastify.FastifyInstance) => {
    app.get('/', async (_, reply) => {
        const result = await db.select().from(users)

        reply.status(200).send({
            data: result,
        })
    });
}

export default usersController;