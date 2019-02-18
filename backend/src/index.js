const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

var uri = "mongodb://rocks:rocks@localhost:27017/rocks";

mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log("sucess connect");
  },
  err => {
    console.log("Error connect");
  }
);

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(express.json());
app.use(cors());
app.use(require("./routes"));

server.listen(4000, () => {
  console.log("Server started on port 4000");
});
