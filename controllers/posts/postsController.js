const postsModel = require("../../models/post");

const postsController = {
  createPost: async (req, res) => {
    const { title, content } = req.body;

    const post = new postsModel({
      title,
      content,
      createdDate: new Date(),
    });

    try {
      const savedData = await post.save(); //
      res.status(200).json({
        message: "업로드 완료",
        data: savedData,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }

    // const newData = {
    //   idx: idx++,
    //   title: title,
    //   content: content,
    //   createdDate: new Date(),
    // };

    postsArr.push(newData);

    res.json({
      message: "데이터 생성 완료",
    });
  },
  readPost: (req, res) => {
    res.json({
      message: "조회 완료",
      data: postsArr,
    });
  },
};

module.exports = postsController;
