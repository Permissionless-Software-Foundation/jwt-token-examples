/*
  Use the jwt-bch-lib npm library to automatically fetch and validate JWT tokens.

  For a more extensive example, check out this example repository:
  https://github.com/Permissionless-Software-Foundation/jwt-bch-demo
*/

const BCHJS = require("@psf/bch-js");

// Instantiate the JWT handling library for FullStack.cash.
const JwtLib = require("jwt-bch-lib");
const jwtLib = new JwtLib({
  login: "demo@demo.com",
  password: "demo"
});

async function start() {
  // Log into the auth server and get the JWT token.
  await jwtLib.register();
  const apiToken = jwtLib.userData.apiToken;

  bchjs = new BCHJS({ apiToken });

  const address = "bitcoincash:qr69kyzha07dcecrsvjwsj4s6slnlq4r8c30lxnur3";

  const balance = await bchjs.Electrumx.balance(address);
  console.log("BCH balance: ", balance);
}
start();
