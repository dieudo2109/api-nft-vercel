const { Author, Nft } = require("../modal/modal");

const nftController = {
  //add nft
  addNft: async (req, res) => {
    try {
      const newNft = new Nft(req.body);
      const savedNft = await newNft.save();
      if (req.body.author) {
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { nft: savedNft._id } });
      }
      res.status(200).json(savedNft);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //get all nft
  getAllnft: async (req, res) => {
    try {
      const allNft = await Nft.find().populate("author");
      res.status(200).json(allNft);
    } catch (error) {
      res.status(500).json(err);
    }
  },
  //get nft
  getNft: async (req, res) => {
    try {
      const oneNft = await Nft.findById(req.params.id).populate("author");
      res.status(200).json(oneNft);
    } catch (error) {
      res.status(500).json(err);
    }
  },
  // update nft
  updateNft: async (req, res) => {
    try {
      const nft = await Nft.findById(req.params.id);
      await nft.updateOne({ $set: req.body });
      res.status(200).json("Update successfuly");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // delete nft
  deleteNft: async (req, res) => {
    try {
      await Author.updateMany({ nft: req.params.id }, { nft: null });
      await Nft.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = nftController;
