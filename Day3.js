const fs = require("fs"); //fs : File System
console.log("Creating File3");
fs.writeFileSync("File3.txt", "See this content on Browser");
const http = require("http");
const hostname = "127.0.1.1";
const port = 3001;
const server = http.createServer((req, res) => {
  res.statusCode = 200; //status code like 404 is sent to client when server is flushed
  res.setHeader("Content-Type", "text/txt");
  try {
    const data = fs.readFileSync("File3.txt", "utf-8");
    res.end(data);
  } catch {
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});
server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
