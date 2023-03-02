import axios from 'axios';
import range from 'py-range-ts';
import MemoStorage from '../util/MemoStorage';
import zf from '../util/zf';

export default async function getToken(): Promise<string | undefined> {
    const requestHeader: CommonObject<string> = {
        Authorization:
            'Basic ' +
            Buffer.from([__env.AUTH_USERNAME, __env.AUTH_PASSWORD].join(':')).toString('base64'),
    };

    try {
        const res = await axios.get(__env.AUTH_URI, {
            headers: requestHeader,
        });

        // prettier-ignore
        if(
            !zf.isInRange(res.status, 200, 300) 
            || !zf.isCommonObject(res.data)
            || 'access_token' in res.data === false
        )
        {
            MemoStorage.instance.addLog('Get Token failed', {
                request: {
                    url: __env.AUTH_URI,
                    headers: requestHeader,
                },
                response: {
                    status: res.status,
                    headers: res.headers,
                    data: res.data,
                }
            });
            return undefined;
        }

        return String(res.data['access_token']);
    } catch (e) {
        if (e instanceof axios.AxiosError) {
            const res = e.response;

            if (!res) {
                MemoStorage.instance.addLog('Get Token failed', 'Response is undefined !');
                return undefined;
            }

            MemoStorage.instance.addLog('Get Token failed', {
                request: {
                    url: __env.AUTH_URI,
                    headers: requestHeader,
                },
                response: {
                    status: res.status,
                    headers: res.headers,
                    data: res.data,
                },
            });
            return undefined;
        }

        console.log(e);

        MemoStorage.instance.addLog('Get Token failed', 'An unknown error');
        return undefined;
    }
}
