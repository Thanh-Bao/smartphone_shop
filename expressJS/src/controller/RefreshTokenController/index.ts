import { Router } from 'express';
import RefreshTokenController from './RefreshTokenController';

function loadRefreshTokenRouter(parentRouter: Router) {
    const c = new RefreshTokenController();
    const router = Router();

    router.get('/', c.index);
    router.post('/', c.index);

    parentRouter.use('/refresh-token', router);
    parentRouter.use('/renew_token', c.index);
}

export default loadRefreshTokenRouter;
