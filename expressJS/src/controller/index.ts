import { Router } from 'express';
import loadHomeControllerRouter from './HomeController';
import loadProxyRouter from './ProxyController';
import loadRefreshTokenRouter from './RefreshTokenController';

function loadControllerRouter(parentRouter: Router) {
    loadRefreshTokenRouter(parentRouter);
    loadHomeControllerRouter(parentRouter);
    loadProxyRouter(parentRouter);
}

export default loadControllerRouter;
