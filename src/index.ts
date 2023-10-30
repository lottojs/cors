import { Cors } from '@core/cors'
import { Context, CorsObject, Middleware } from '@core/types'

/**
 * Apply CORS middleware
 *
 * @param corsObject Object of cors options.
 * @returns Middleware Function for handling CORS
 */
export function cors({
    allowedOrigins = ['*'],
    allowedMethods = [
        'GET',
        'POST',
        'PUT',
        'PATCH',
        'DELETE',
        'HEAD',
        'OPTIONS',
    ],
    allowedHeaders = ['Content-Type', 'Authorization'],
    exposeHeaders = ['Content-Length', 'Authorization'],
    allowCredentials = true,
}: CorsObject): Middleware {
    const corInstance = new Cors({
        allowedOrigins,
        allowedMethods,
        allowedHeaders,
        exposeHeaders,
        allowCredentials,
    })

    return async ({ req, res, next }: Context) => {
        corInstance.apply({ req, res, next })
    }
}
