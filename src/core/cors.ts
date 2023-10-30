import { Context, CorsObject, Request, Response } from '@core/types'

export class Cors {
    private allowedOrigins?: string[]
    private allowedMethods?: string[]
    private allowedHeaders?: string[]
    private exposeHeaders?: string[]
    private allowCredentials?: boolean

    constructor(corsObject: CorsObject) {
        this.allowedOrigins = corsObject.allowedOrigins
        this.allowedMethods = corsObject.allowedMethods
        this.allowedHeaders = corsObject.allowedHeaders
        this.exposeHeaders = corsObject.exposeHeaders
        this.allowCredentials = corsObject.allowCredentials
    }

    apply({ req, res, next }: Context): void {
        if (req.method === 'OPTIONS') {
            this.setAllowedOrigin(req, res)
            this.setAllowedMethods(res)
            this.setAllowedHeaders(res)
            this.setAllowedCredentials(res)
            this.setExposedHeaders(res)

            res.setHeader('Content-Length', '0')
            res.status(204)
            res.end()
        } else {
            this.setAllowedOrigin(req, res)
            this.setAllowedCredentials(res)
            this.setExposedHeaders(res)

            next()
        }
    }

    private setAllowedOrigin(req: Request, res: Response) {
        const requestOrigin = req.headers.origin

        if (!this.allowedOrigins || this.allowedOrigins.includes('*')) {
            res.setHeader('Access-Control-Allow-Origin', '*')
        } else if (
            this.allowedOrigins &&
            this.allowedOrigins.includes(requestOrigin as string)
        ) {
            res.setHeader(
                'Access-Control-Allow-Origin',
                requestOrigin as string,
            )
        }
    }

    private setAllowedMethods(res: Response) {
        if (this.allowedMethods) {
            res.setHeader(
                'Access-Control-Allow-Methods',
                this.allowedMethods.join(', '),
            )
        }
    }

    private setAllowedHeaders(res: Response) {
        if (this.allowedHeaders) {
            res.setHeader(
                'Access-Control-Allow-Headers',
                this.allowedHeaders.join(', '),
            )
        }
    }

    private setExposedHeaders(res: Response) {
        if (this.exposeHeaders) {
            res.setHeader(
                'Access-Control-Expose-Headers',
                this.exposeHeaders.join(', '),
            )
        }
    }

    private setAllowedCredentials(res: Response) {
        if (this.allowCredentials) {
            res.setHeader(
                'Access-Control-Allow-Credentials',
                String(this.allowCredentials),
            )
        }
    }
}
