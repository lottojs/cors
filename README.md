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
  <a href="https://github.com/lottojs/params-parser">
    <img src=".github/logo.png" alt="Logo" width="100" height="115">
  </a>

  <h3 align="center">@lottojs/params-parser</h3>

  <p align="center">
    NodeJS HTTP Request path and query parameters parser.
    <br />
    <br />
    <a href="https://github.com/lottojs/params-parser/issues">Report Bug</a>
    ·
    <a href="https://github.com/lottojs/params-parser/issues">Request Feature</a>
  </p>
</div>


## About The Project

HTTP Middleware done to parse query and path parameters from a given url, initially created to serve the [@lottojs/router](https://github.com/lottojs/router) package but nothing excludes it to be also used by the community.

## Documentation
Complete API documentation is available at [lottojs.tech][documentation-url].

## Getting Started

### Installation
   ```sh
    npm i @lottojs/params-parser
   ```
### Usage
It will depend on your scenario, basically the package exports a middleware called `paramsParser`. This middleware can be used receiving a path from any http handler and  returns a promise awaiting to receive a request and next parameters. On the end it put's each parsed group on the right place, query parameters at `req.query` object and path parameters at `req.params` object, all ready to be used.

```typescript
    import { createServer } from 'node:http';
    import { paramsParser } from '@lottojs/params-parser';

    createServer(
        async (req: IncomingMessage, res: ServerResponse) => {
                ...
                paramsParser(req.url)(req, next())
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


[contributors-shield]: https://img.shields.io/github/contributors/lottojs/params-parser.svg?style=for-the-badge
[contributors-url]: https://github.com/lottojs/params-parser/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lottojs/params-parser.svg?style=for-the-badge
[forks-url]: https://github.com/lottojs/params-parser/network/members
[stars-shield]: https://img.shields.io/github/stars/lottojs/params-parser.svg?style=for-the-badge
[stars-url]: https://github.com/lottojs/params-parser/stargazers
[issues-shield]: https://img.shields.io/github/issues/lottojs/params-parser.svg?style=for-the-badge
[issues-url]: https://github.com/lottojs/params-parser/issues
[license-shield]: https://img.shields.io/github/license/lottojs/params-parser.svg?style=for-the-badge
[license-url]: https://github.com/lottojs/params-parser/blob/master/LICENSE.txt
[npm-shield]: https://img.shields.io/npm/v/@lottojs/params-parser?style=for-the-badge&logo=npm&logoColor=FFFFFF&labelColor=555555&color=CB0001
[npm-url]: https://www.npmjs.com/package/@lottojs/params-parser
[documentation-url]: https://lottojs.tech
