const authorController = require("../controllers/authorControllers");
const router = require("express").Router();

//addauthor
router.post("/", authorController.addAuthor);

//GET ALL AUTHORS
router.get("/", authorController.getAllAuthors);

//GET AUTHOR
router.get("/:id", authorController.getAuthor);
// UPDATE AUTHOR
router.put("/:id", authorController.updateAuthor);
//DELETE AUTHOR
router.delete("/:id", authorController.deleteAuthor);
module.exports = router;
