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
): Middleware {
    const { apply } = new Cors(allowedSites, allowedMethods, allowedHeaders)

    return async ({ req, res, next }: Context) => {
        await apply(req, res, next)
    }
}
