import { IncomingMessage, ServerResponse } from 'node:http'

export type Params = Record<string, string>

export interface ParsedQuery {
    [key: string]: undefined | string | string[] | ParsedQuery | ParsedQuery[]
}

export interface MatchedGroups extends Record<string, any> {
    query?: string
}

export interface Response<T = unknown> extends ServerResponse {
    /**
     * Send application/json response.
     *
     * Examples:
     *
     *     res.json(null);
     *     res.json({ fruit: 'apple' });
     *     res.status(200).json('oh we are here!');
     * @param body Data to be transformed on JSON.
     * @returns Response
     */
    json: (body?: unknown) => Response<T>

    /**
     * Set status `code`.
     * @param code HTTP status code e.g. 200, 201, 400, 404...
     * @returns Response
     */
    status: (code: number) => Response<T>

    /**
     * Send text/plain response.
     *
     * Examples:
     *
     *     res.text('hello world!');
     *     res.status(200).text('oh we are here!');
     * @param body Data to be transformed on text.
     * @returns Response
     */
    text: (body: unknown) => Response<T>
}

export interface Request extends IncomingMessage {
    params: Params
    query: ParsedQuery
    [key: string]: any
}

export type NextFunction = (...args: any[]) => void

export type Context = {
    /**
     * Request Object
     */
    req: Request

    /**
     * Response Object
     */
    res: Response

    /**
     * Next Function, mostly used on middlewares in order to can go ahead
     * to the reqeuest.
     */
    next: NextFunction
}

export type Middleware = (ctx: Context) => void
