import { Request, Response, Router } from 'express';
import React from 'ts-rssr';
import MemoStorage from '../../util/MemoStorage';
import HomePage from '../../view/pages/HomePage';

function loadHomeControllerRouter(parentRouter: Router) {
    parentRouter.get('/', async (req: Request, res: Response) => {
        const strHtml = React.render(
            HomePage({
                logs: MemoStorage.instance.getLogs(),
            }),
        );

        res.status(200).send(strHtml);
    });
}

export default loadHomeControllerRouter;
