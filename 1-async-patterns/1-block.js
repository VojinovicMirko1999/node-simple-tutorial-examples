const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
    return;
  }
  if (req.url === "/about") {
    // BLOCKING CODE !!!
    for (i = 0; i < 1000; i++) {
      for (j = 0; j < 1000; j++) {
        console.log("Executing...");
      }
    }
    res.end("About page");
    return;
  }
  res.end("Error page");
});

server.listen(8001, () => {
  console.log("Server listening on port 8001...");
});
