import { NextFunction, Request, Response } from 'express';

const createSafeMiddleware = (
    callbackFn: (req: Request, res: Response, next?: NextFunction) => Promise<any> | any,
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await callbackFn(req, res, next);
        } catch (e) {
            console.log(e);
            return res.status(500).send(e).end();
        }
    };
};

export default createSafeMiddleware;
