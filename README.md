# jwt-token-examples

This repository gives examples of how to work with [JWT tokens](https://jwt.io/), used to access increased rate limits to the FullStack.cash API. This code repository is compliment to this YouTube video:

- [Using JWT Tokens with FullStack.cash](https://youtu.be/27h-KiS-dPg)

The code in this repository is split up to different ways in which a user may need to incorporate a JWT token into their project:

- [curl](./curl) includes examples of interacting directly with the REST API without any assumptions about the programming language you are working with.
- [axios-rest-api](./axios-rest-api) includes examples of interacting direclty with the REST API using the popular [axios](https://github.com/axios/axios) JS library for working with generic REST APIs. It follows [the instructions in the bch-api README](https://github.com/Permissionless-Software-Foundation/bch-api#rate-limits).
- [bch-js](./bch-js) includes examples of instantiating the [bch-js]() library with a JWT token. This follows [the instructions in the bch-js README](https://github.com/Permissionless-Software-Foundation/bch-js#api-key).
- [jwt-bch-lib](./jwt-bch-lib) shows how to use the [jwt-bch-lib npm library](https://www.npmjs.com/package/jwt-bch-lib) to allow your app to automatically use and renew JWT tokens during operation. This should allow your blockchain applications to 'just work', so long as you maintain a balance in your FullStack.cash account.
