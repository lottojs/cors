import { Context } from '@core/types'

export class Cors {
    private allowedOrigins: string[]
    private allowedMethods: string[]
    private allowedHeaders: string[]
    private exposeHeaders: string[]
    private allowCredentials: boolean

    constructor(
        allowedOrigins: string[] = ['*'],
        allowedMethods: string[] = [
            'GET',
            'POST',
            'PUT',
            'PATCH',
            'DELETE',
            'OPTIONS',
        ],
        allowedHeaders: string[] = ['Content-Type', 'Authorization'],
        exposeHeaders: string[] = ['Content-Length'],
        allowCredentials = true,
    ) {
        this.allowedOrigins = allowedOrigins
        this.allowedMethods = allowedMethods
        this.allowedHeaders = allowedHeaders
        this.exposeHeaders = exposeHeaders
        this.allowCredentials = allowCredentials
    }

    apply({ req, res, next }: Context): void {
        const origin = req.headers.origin

        if (
            this.allowedOrigins.includes('*') ||
            this.allowedOrigins.includes(origin as string)
        ) {
            res.setHeader('Access-Control-Allow-Origin', origin as string)

            res.setHeader(
                'Access-Control-Allow-Methods',
                this.allowedMethods.join(', '),
            )
            res.setHeader(
                'Access-Control-Allow-Headers',
                this.allowedHeaders.join(', '),
            )
            res.setHeader(
                'Access-Control-Expose-Headers',
                this.exposeHeaders.join(', '),
            )
            res.setHeader(
                'Access-Control-Allow-Credentials',
                String(this.allowCredentials),
            )
        }

        if (req.method === 'OPTIONS') {
            res.writeHead(200)
            res.end()
        }

        next()
    }
}
