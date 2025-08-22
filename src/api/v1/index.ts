import fastify from "fastify";
import usersController from "./users/users.controller.ts";

export default function v1Routes(app: fastify.FastifyInstance) {
   
    app.register(usersController, { prefix: '/users' });

}