const handleRoutes = (req, res) => {
  const { url, method } = req;
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Node Basics Exercise </title></head>");
    res.write(`<body><ul><li>User 1</li></ul></body>`);
    res.write("</html>");
    return res.end();
  }
  if(url === '/create-users' && method === 'POST'){
    const body = [];
    req.on('data', (chuck) => {
      body.push(chuck);
    })
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const user = parseBody.split('=')[1];
      console.log(user);
    })
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader("Context-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node Basics Exercise </title></head>");
  res.write('<body><h1>Hello!</h1><form action="/create-users" method="POST"><input type "text" name="username"><button type="submit"> New User </button></form></body>');
  res.write("</html>");
  res.end();
};

module.exports = handleRoutes;