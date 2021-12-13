var express = require("express");
var router = express.Router();

const postsRouter = require("./posts/index.js");

router.use("/posts", postsRouter);

module.exports = router;
