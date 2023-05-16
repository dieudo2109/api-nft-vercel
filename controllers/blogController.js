const { Author, Blog } = require("../modal/modal");

const blogController = {
  //add blog
  addBlog: async (req, res) => {
    try {
      const newBlog = new Blog(req.body);
      const savedBlog = await newBlog.save();
      if (req.body.author) {
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { blog: savedBlog._id } });
      }
      res.status(200).json(savedBlog);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllblog: async (req, res) => {
    try {
      const allBlog = await Blog.find().populate("author");
      res.status(200).json(allBlog);
    } catch (error) {
      res.status(500).json(err);
    }
  },
  //GET BLOG
  getBlog: async (req, res) => {
    try {
      const oneBlog = await Blog.findById(req.params.id).populate("author");
      res.status(200).json(oneBlog);
    } catch (error) {
      res.status(500).json(err);
    }
  },
  //UPDATE BLOG
  updateBlog: async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      await blog.updateOne({ $set: req.body });
      res.status(200).json("Update successfuly");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = blogController;
