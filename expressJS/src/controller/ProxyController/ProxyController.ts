import createSafeMiddleware from '../../util/createSafeMiddleware';
import axios, { AxiosResponse } from 'axios';
import { IncomingHttpHeaders } from 'http';
import TokenManager from '../../util/TokenManager';
import MemoStorage from '../../util/MemoStorage';

type Headers = { [K: string]: string | string[] };
type IndexAny = { [K: string]: unknown };

class ProxyController {
    private readonly acceptRequestHeaders = Object.freeze([
        'if-none-match',
        'if-modified-since',
        'accept-encoding',
        'user-agent',
        'cookie',
    ] as const);

    private readonly acceptResponseHeaders = Object.freeze([
        'content-type',
        'sap-metadata-last-modified',
        'set-cookie',
        'eTag',
    ] as const);

    private readonly defaultRequestHeaders = Object.freeze({
        'accept-encoding': 'gzip, deflate, br',
    } satisfies { [K: string]: string });

    private readonly defaultResponseHeaders = Object.freeze({} satisfies { [K: string]: string });

    private makeUrl(requestPath: string, requestQuery: IndexAny): string {
        const url = new URL(__env.SAP_ENDPOINT + requestPath);

        for (const [key, value] of Object.entries(requestQuery)) {
            if (typeof value !== 'string') continue;
            url.searchParams.set(key, value);
        }

        url.searchParams.set('format', 'json');
        return url.toString();
    }

    private makeRequestHeaders(requestHeaders: IncomingHttpHeaders): Headers {
        const newHeaders: Headers = {
            ...this.defaultRequestHeaders,
        };

        for (const headerKey of this.acceptRequestHeaders) {
            if (headerKey in requestHeaders === false) continue;

            const headerValue = requestHeaders[headerKey];
            if (!headerValue) continue;

            newHeaders[headerKey] = headerValue;
        }

        return newHeaders;
    }

    private makeResponseHeaders(responseHeaders: IncomingHttpHeaders): Headers {
        const newHeaders: Headers = {
            ...this.defaultResponseHeaders,
        };

        for (const headerKey of this.acceptResponseHeaders) {
            if (headerKey in responseHeaders === false) continue;

            const headerValue = responseHeaders[headerKey];
            if (!headerValue) continue;

            newHeaders[headerKey] = headerValue;
        }

        return newHeaders;
    }

    public index = createSafeMiddleware(async (req, res) => {
        if (TokenManager.instance.accessToken === undefined) {
            return res.sendStatus(500).end();
        }

        try {
            const headers = this.makeRequestHeaders(req.headers);
            headers['Authorization'] = 'Bearer ' + TokenManager.instance.accessToken;

            const sapResponse: AxiosResponse<any, any> = await axios(
                this.makeUrl(req.path, req.query),
                {
                    method: req.method,
                    headers: headers,
                },
            );

            const responseHeaders = this.makeResponseHeaders(sapResponse.headers as Headers);
            for (const [key, value] of Object.entries(responseHeaders)) {
                res.setHeader(key, value);
            }

            // config GET - 304
            if (req.method.toUpperCase() === 'GET') {
                res.setHeader('Cache-Control', 'no-cache');
            } else {
                const sapResponseCacheControlHeader = sapResponse.headers['Cache-Control'];
                if (typeof sapResponseCacheControlHeader === 'string') {
                    res.setHeader('Cache-Control', sapResponseCacheControlHeader);
                }
            }

            // response
            return res
                .status(sapResponse.status)
                .send(JSON.stringify(sapResponse.data).replaceAll(__env.SAP_ENDPOINT, req.baseUrl))
                .end();
        } catch (e) {
            if (e instanceof axios.AxiosError) {
                const sapResponse = e.response;
                if (!sapResponse) {
                    return res.sendStatus(500).end();
                }

                const responseHeaders = this.makeResponseHeaders(sapResponse.headers as Headers);
                for (const [key, value] of Object.entries(responseHeaders)) {
                    res.setHeader(key, value);
                }
                return res.status(sapResponse.status).send(sapResponse.data);
            }

            console.log(e);
            MemoStorage.instance.addLog('[Proxy]', 'Never !');
            return res.sendStatus(500).end();
        }
    });
}

export default ProxyController;
