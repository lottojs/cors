import { NextFunction, Request, Response } from '@core/types'

export interface AbstractCors {
    apply: (req: Request, res: Response, next: NextFunction) => Promise<void>
}

export class Cors implements AbstractCors {
    private allowedSites: string[]
    private allowedMethods: string[]
    private allowedHeaders: string[]

    constructor(
        allowedSites = [''],
        allowedMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders = ['Content-Type', 'Authorization'],
    ) {
        this.allowedSites = allowedSites
        this.allowedMethods = allowedMethods
        this.allowedHeaders = allowedHeaders
    }

    /**
     * Apply cors headers.
     * @param req Request
     * @param res Response
     * @param next NextFunction
     */
    public async apply(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        const origin = req.headers.origin!

        if (this.allowedSites.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin)
        }

        res.setHeader(
            'Access-Control-Allow-Methods',
            this.allowedMethods.join(', '),
        )
        res.setHeader(
            'Access-Control-Allow-Headers',
            this.allowedHeaders.join(', '),
        )

        if (req.method === 'OPTIONS') {
            res.writeHead(200)
            res.end()
        }

        next()
    }
}
