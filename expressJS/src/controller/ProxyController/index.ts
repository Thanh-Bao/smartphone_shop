import { Router } from 'express';
import ProxyController from './ProxyController';

function loadProxyRouter(parentRouter: Router) {
    const c = new ProxyController();
    parentRouter.use(c.index);
}

export default loadProxyRouter;
