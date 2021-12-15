const express = require("express");
const router = express.Router();
const livrosController = require('../controllers/livrosController')

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/livros", livrosController.index)
router.get("/livros/:id", livrosController.book)
router.post("/livros/new", livrosController.newBook)
router.put("/livros/update/:id", livrosController.livrosUpp)
router.delete("/livros/delete/:id", livrosController.livrosDown)

module.exports = router;