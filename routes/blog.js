const blogController = require("../controllers/blogController");
const router = require("express").Router();

//ADD BLOG
router.post("/", blogController.addBlog);
//GET ALL BLOG
router.get("/", blogController.getAllblog);
// GET BLOG
router.get("/:id", blogController.getBlog);
//UPDATE BLOG
router.put("/:id", blogController.updateBlog);
module.exports = router;
