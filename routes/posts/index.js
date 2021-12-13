const express = require("express");
const router = express.Router();

const postsController = require("../../controllers/posts/postsController");

// 게시물 생성
router.post("/posts", postsController.createPost);

// 전체 게시물 조회
router.get("/posts", postsController.readPost);

module.exports = router;
