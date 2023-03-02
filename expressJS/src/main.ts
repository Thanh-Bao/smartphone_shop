import express, { Application } from 'express';
import loadControllerRouter from './controller';
import cors from 'express';
import serveFavicon from 'serve-favicon';
import path from 'path';
import { loadEnv } from './config/env-config';
import TokenManager from './util/TokenManager';
import MemoStorage from './util/MemoStorage';

const main = async () => {
    loadEnv(); // ! IMPORTANT

    console.group('ENV');
    console.log(__env);
    console.groupEnd();

    await TokenManager.instance.init();

    const app: Application = express();

    app.use('/__static', express.static(path.join(__dirname, '../resources/')));

    // cors
    app.use(cors());

    // favicon
    app.use(serveFavicon(path.join(__dirname, '../resources/favicon.ico')));

    // controllers
    loadControllerRouter(app);

    app.listen(__env.PORT, () => {
        console.log(`[INFO] Server running on port ${__env.PORT}`);
        MemoStorage.instance.addLog('Server started', {
            REFRESH_TOKEN_INTERVAL: __env.REFRESH_TOKEN_INTERVAL,
            MAX_LOG_LENGTH: __env.MAX_LOG_LENGTH,
        });
    });
};

main();
