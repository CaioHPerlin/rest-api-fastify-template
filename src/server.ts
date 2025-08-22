import env from "./config/env.ts";
import buildApp from "./app.ts";

async function bootstrap() {
    const app = await buildApp();

    try {
        app.listen({ port: env.PORT });
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
}

bootstrap();
