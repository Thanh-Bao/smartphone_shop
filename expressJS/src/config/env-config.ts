import path from 'path';
import { z } from 'zod';
import envSchema from 'zod-env-schema';

export interface EnvType {
    PORT: number;
    AUTH_URI: string;
    AUTH_USERNAME: string;
    AUTH_PASSWORD: string;
    SAP_ENDPOINT: string;
    REFRESH_TOKEN_INTERVAL: string;
    MAX_LOG_LENGTH: number;
}

function convertStringToInt(v: string): number {
    const standardValue = v.replace(/[\s\_]+/g, '');
    return parseInt(standardValue);
}

function getEnv(): Readonly<EnvType> {
    const env: EnvType = envSchema(
        {
            PORT: {
                preprocessing: convertStringToInt,
                validator: z
                    .number()
                    .finite()
                    .int()
                    .min(1)
                    .max(2 ** 16 - 1),
            },
            AUTH_URI: {
                validator: z.string().transform((v) => v.trim()),
            },
            AUTH_USERNAME: {
                validator: z.string().transform((v) => v.trim()),
            },
            AUTH_PASSWORD: {
                validator: z.string().transform((v) => v.trim()),
            },
            SAP_ENDPOINT: {
                validator: z.string().transform((v) => v.trim()),
            },
            REFRESH_TOKEN_INTERVAL: {
                validator: z
                    .string()
                    .transform((v) => {
                        return v.trim();
                    })
                    .default('4h'),
            },
            MAX_LOG_LENGTH: {
                preprocessing: convertStringToInt,
                validator: z.number().finite().int().min(1).max(10_000),
            },
        },
        {
            paths: [path.join(__dirname, '../../env/.env')],
        },
    );

    return Object.freeze(env);
}

export function loadEnv() {
    (global as any).__env = getEnv();
}
