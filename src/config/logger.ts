import env from './env.ts'

const envToLogger: Record<typeof env.NODE_ENV, any> = {
    development: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname,reqId,req',
            },
        },
    },
    production: true,
};


export default envToLogger[env.NODE_ENV];
