const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.db = router.db;

server.use(cors());
server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(8000, () => {
    console.log("✅ JSON Server running at http://localhost:8000");
});
