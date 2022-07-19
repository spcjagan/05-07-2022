console.log("Hi");
const jaganFetch = require("axios");

jaganFetch.get("https://jsonplaceholder.typicode.com/todos/2").then((jagan) => {
  console.log("Inside fetch: ", jagan.data);
});

/**
 * node-fetch
 * request
 * axios
 * supernet
 */
// npm init = you have to press enter every time or you can modify details 
// npm init -y = it will take defaults and won't ask you any thing 