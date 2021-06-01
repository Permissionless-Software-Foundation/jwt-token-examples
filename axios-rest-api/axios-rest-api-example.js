/*
  An example using axios to interact with the FullStack.cash API using a
  JWT token.
*/

const axios = require("axios");

async function start() {
  const address = "bitcoincash:qr69kyzha07dcecrsvjwsj4s6slnlq4r8c30lxnur3";
  const url = `https://api.fullstack.cash/v4/electrumx/balance/${address}`;
  const jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODhhY2JmMDIyMWMxMDAxMmFkOTNmZiIsImVtYWlsIjoiY2hyaXMudHJvdXRuZXJAZ21haWwuY29tIiwiYXBpTGV2ZWwiOjQwLCJyYXRlTGltaXQiOjMsInBvaW50c1RvQ29uc3VtZSI6MTAwLCJkdXJhdGlvbiI6MzAsImlhdCI6MTYyMTM5MTU1MiwiZXhwIjoxNjIzOTgzNTUyfQ.wgNiiuPBgmrh85GrlO-f2XGft2267j3AJL2AQKBzYN4";

  const axiosOptions = {
    headers: { Authorization: `Token ${jwt}` }
  };

  const result = await axios.get(url);

  console.log("BCH balance: ", result.data);
}
start();
