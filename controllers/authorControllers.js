const { Author, Nft } = require("../modal/modal");

const authorController = {
  //add author
  addAuthor: async (req, res) => {
    try {
      const newAuthor = new Author(req.body);
      const savedAuthor = await newAuthor.save();
      res.status(200).json(savedAuthor);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET ALL AUTHORS
  getAllAuthors: async (req, res) => {
    try {
      const authors = await Author.find().populate("nft");
      res.status(200).json(authors);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // GET AN AUTHOR
  getAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id).populate("nft");
      res.status(200).json(author);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id);
      await author.updateOne({ $set: req.body });
      res.status(200).json("Update successfuly");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // DELETE AUTHOR
  deleteAuthor: async (req, res) => {
    try {
      await Book.updateMany({ author: req.params.id }, { author: null });
      await Author.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = authorController;
