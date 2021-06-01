/*
  An example of how to instantiate bch-js with a JWT token.
*/

const BCHJS = require("@psf/bch-js");

async function start() {
  const bchjs = new BCHJS({
    apiToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODhhY2JmMDIyMWMxMDAxMmFkOTNmZiIsImVtYWlsIjoiY2hyaXMudHJvdXRuZXJAZ21haWwuY29tIiwiYXBpTGV2ZWwiOjQwLCJyYXRlTGltaXQiOjMsInBvaW50c1RvQ29uc3VtZSI6MTAwLCJkdXJhdGlvbiI6MzAsImlhdCI6MTYyMTM5MTU1MiwiZXhwIjoxNjIzOTgzNTUyfQ.wgNiiuPBgmrh85GrlO-f2XGft2267j3AJL2AQKBzYN4"
  });

  const address = "bitcoincash:qr69kyzha07dcecrsvjwsj4s6slnlq4r8c30lxnur3";

  const balance = await bchjs.Electrumx.balance(address);
  console.log("BCH balance: ", balance);
}
start();
