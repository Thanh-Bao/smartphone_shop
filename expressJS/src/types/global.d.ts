import { EnvType } from '../config/env-config';

export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {}
    }

    const __env: Readonly<EnvType>;

    interface CommonObject<T = any> {
        [K: string]: T;
    }
}
