const http = require("http");

const handleRoutes = require('./routes');

const server = http.createServer(handleRoutes);

server.listen(3000, () => console.log("Server is listen on http://localhost:3000"));

