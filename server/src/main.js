const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("src/db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 8081;

/// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  switch (req.method) {
    case "POST": {
      req.body.createdAt = Date.now();
      req.body.updatedAt = Date.now();
    }
  }

  // Continue to JSON Server router
  next();
});

// Use default router
server.use("/api", router);
server.listen(PORT, () => {
  console.log("JSON Server is running ...", PORT);
});
