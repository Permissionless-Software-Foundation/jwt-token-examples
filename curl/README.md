# curl Usage

Here is an example using bash script notation of how to use your JWT token with a simple curl statement:

```bash
# Export your JWT token to an environment variable
export BCHJSTOKEN=eyJhbGciOiJ...

# Call to the FullStack.cash API and include the JWT token.
curl "https://api.fullstack.cash/v4/electrumx/balance/bitcoincash:qr69kyzha07dcecrsvjwsj4s6slnlq4r8c30lxnur3" -X GET -H "Content-Type: application/json" -H "Authorization: Token ${BCHJSTOKEN}"
```
