const express = require("express");
const app = express();
const cors = require("cors");
const port = 8007;
const configuredb = require("./config/database");
const router = require("./config/routes");
app.use(cors());
app.use(express.json());
configuredb();
app.use(router);
app.listen(port, () => {
  console.log("server is running on the port :", port);
});
