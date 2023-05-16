const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const port = 8000;
const authorRoute = require("./routes/author");
const nftRoute = require("./routes/nft");
const blogRoute = require("./routes/blog");
dotenv.config();

//connect database
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://dieudo12m:anhdieu2109@cluster0.0hqc6yt.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.log("Error connecting with error code:", err);
  });
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));
//routes
app.use("/v1/author", authorRoute);
app.use("/v1/nft", nftRoute);
app.use("/v1/blog", blogRoute);
app.listen(port, () => {
  console.log(`Run localhost ${port}`);
});
