import ms from 'ms';
import getToken from '../../apis/getToken';
import MemoStorage from '../MemoStorage';

export class TokenManager {
    private static _instance: TokenManager | undefined = undefined;
    private _accessToken: string | undefined = undefined;
    private _timerId: NodeJS.Timer | undefined = undefined;
    private _wasInitiated: boolean = false;

    public static get instance() {
        if (this._instance === undefined) {
            this._instance = new TokenManager();
        }
        return this._instance;
    }

    public get accessToken() {
        return this._accessToken;
    }

    protected constructor() {}

    public init = async () => {
        if (this._wasInitiated) return;

        // ! try to get first token
        const refreshTokenResult = await this.refreshToken();
        // prettier-ignore
        MemoStorage.instance.addLog(
            'First',
            refreshTokenResult ? 'Success':'Failed'
        );

        // ! init auto refresh token service
        const initServiceResult = this.autoRefreshTokenServiceInit();
        // prettier-ignore
        MemoStorage.instance.addLog(
            'Auto Refresh Token Service start',
            initServiceResult ? 'Success':'Failed'
        );

        this._wasInitiated = true;
        return;
    };

    public refreshToken = async () => {
        // prettier-ignore
        this._accessToken = await getToken();
        MemoStorage.instance.addLog('Refresh Token', {
            accessToken: this._accessToken,
        });
        return this._accessToken !== undefined;
    };

    private autoRefreshTokenServiceInit = () => {
        if (this._timerId) return false;

        this._timerId = setInterval(() => {
            this.refreshToken();
        }, ms(__env.REFRESH_TOKEN_INTERVAL));

        return true;
    };
}
