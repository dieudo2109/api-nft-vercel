const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  nft: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Nft",
    },
  ],
  blog: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
});

const blogNft = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  numberView: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

const itemNft = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  like: {
    type: Number,
    default: 0,
  },
  date: {
    type: String,
  },
  watch: {
    type: Number,
    default: 10,
  },
  image: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

let Blog = mongoose.model("Blog", blogNft);
let Nft = mongoose.model("Nft", itemNft);
let Author = mongoose.model("Author", authorSchema);
module.exports = { Nft, Author, Blog };
