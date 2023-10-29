import { Cors } from '@core/cors'
import { Context, Middleware } from '@core/types'

/**
 * Apply CORS middleware
 *
 * @param allowedSites An array of allowed sites (origins)
 * @param allowedMethods An array of allowed HTTP methods
 * @param allowedHeaders An array of allowed HTTP headers
 * @returns Middleware Function for handling CORS
 */
export function cors(
    allowedSites?: string[],
    allowedMethods?: string[],
    allowedHeaders?: string[],
    exposeHeaders?: string[],
    allowCredentials?: boolean,
): Middleware {
    const corInstance = new Cors(
        allowedSites,
        allowedMethods,
        allowedHeaders,
        exposeHeaders,
        allowCredentials,
    )

    return async ({ req, res, next }: Context) => {
        corInstance.apply({ req, res, next })
    }
}
