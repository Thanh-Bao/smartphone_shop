import createSafeMiddleware from '../../util/createSafeMiddleware';
import TokenManager from '../../util/TokenManager';

class RefreshTokenController {
    public constructor() {}

    public index = createSafeMiddleware(async (req, res) => {
        const refreshTokenResult = await TokenManager.instance.refreshToken();
        return res
            .status(200)
            .json({
                success: refreshTokenResult,
            })
            .end();
    });
}

export default RefreshTokenController;
