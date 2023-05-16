const nftController = require("../controllers/nftController");
const router = require("express").Router();

//ADD NFT
router.post("/", nftController.addNft);

//GET ALL NFT
router.get("/", nftController.getAllnft);
//GET NFT
router.get("/:id", nftController.getNft);
//UPDATE NFT
router.put("/:id", nftController.updateNft);
//DELETE NFT
router.delete("/:id", nftController.deleteNft);
module.exports = router;
