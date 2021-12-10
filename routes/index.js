const express = require("express");
const router = express.Router();
const livrosController = require('../controllers/livrosController')

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/livros", livrosController.index)
router.post("/livro/new", livrosController.newBook)
router.put("/livros/:id", livrosController.livrosUpp)

module.exports = router;