<a name="readme-top"></a>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![NPM][npm-shield]][npm-url]

</div>

<br />
<div align="center">
  <a href="https://github.com/lottojs/cors">
    <img src=".github/logo.png" alt="Logo" width="100" height="115">
  </a>

  <h3 align="center">@lottojs/cors</h3>

  <p align="center">
    NodeJS HTTP CORS Middleware for secure cross-origin resource sharing.
    <br />
    <br />
    <a href="https://github.com/lottojs/cors/issues">Report Bug</a>
    ·
    <a href="https://github.com/lottojs/cors/issues">Request Feature</a>
  </p>
</div>


## About The Project


A CORS middleware designed to enhance security by enabling secure cross-origin resource sharing in Node.js applications. Initially created to serve the [@lottojs/lotto](https://github.com/lottojs/lotto) package but nothing excludes it to be also used by the community.


## Documentation
Complete API documentation is available at [lottojs.tech][documentation-url].

## Getting Started

### Installation
   ```sh
    npm i @lottojs/cors
   ```
### Usage
The package exports a middleware named `cors`. This middleware should be used within an HTTP server handler. It checks the request's origin and sets the appropriate CORS headers. This allows or restricts cross-origin requests based on the specified configuration.


```typescript
    import { createServer } from 'node:http';
    import { cors } from '@lottojs/cors';

    createServer(
        async (req: IncomingMessage, res: ServerResponse) => {
                ...
                const allowedSites = ['http://localhost:3000']
                const allowedMethods = ['GET', 'POST']
                const allowedHeaders = ['Content-Type', 'Authorization']
                const exposeHeaders = ['Content-Length']
                const allowCredentials = true

                cors(
                    allowedSites,
                    allowedMethods,
                    allowedHeaders,
                    exposeHeaders,
                    allowCredentials
                )(req, res, next())
                ...
        },
    )
```
## Contributing

All forms of contributions are more than welcome! You can contribute in the following ways:

- Create an Issue
- Create a Pull Request
- Create third-party middlewares
- Share with your friends
- Make your application with `Lotto`.

For more details, see [Contribution Guide](./CONTRIBUTING.md).

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


[contributors-shield]: https://img.shields.io/github/contributors/lottojs/cors.svg?style=for-the-badge
[contributors-url]: https://github.com/lottojs/cors/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lottojs/cors.svg?style=for-the-badge
[forks-url]: https://github.com/lottojs/cors/network/members
[stars-shield]: https://img.shields.io/github/stars/lottojs/cors.svg?style=for-the-badge
[stars-url]: https://github.com/lottojs/cors/stargazers
[issues-shield]: https://img.shields.io/github/issues/lottojs/cors.svg?style=for-the-badge
[issues-url]: https://github.com/lottojs/cors/issues
[license-shield]: https://img.shields.io/github/license/lottojs/cors.svg?style=for-the-badge
[license-url]: https://github.com/lottojs/cors/blob/master/LICENSE.txt
[npm-shield]: https://img.shields.io/npm/v/@lottojs/cors?style=for-the-badge&logo=npm&logoColor=FFFFFF&labelColor=555555&color=CB0001
[npm-url]: https://www.npmjs.com/package/@lottojs/cors
[documentation-url]: https://lottojs.tech
