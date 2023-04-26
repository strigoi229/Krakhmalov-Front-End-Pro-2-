const http = require("http");

const port = 8199;

const server = http.createServer((req, res) => {
  if (req.url === "/user") {
    res.end(
      JSON.stringify([
        { id: 1, old: 1 },
        { id: 2, old: 2 },
        { id: 3, old: 3 },
        { id: 4, old: 4 },
      ])
    );
  } else {
    res.end("Hello world");
  }
});

server.listen(port);
