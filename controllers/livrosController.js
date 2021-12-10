const { Livro } = require('../models')

const livrosController = {
    index: async (req, res) => {
        const livros = await Livro.findAll()
        res.json(livros)
    },
    newBook: async (req, res) => {
        const { titulo, quantidade_paginas, autor, ano_lancamento, estoque } = req.body
        await Livro.create({
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        })
    },
    livrosUpp: async (req, res) => {
        const { titulo, quantidade_paginas, autor, ano_lancamento, estoque } = req.body
        await Livro.update({
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        }, {
            where: {
                id: req.params
            }
        })
    },
}

module.exports = livrosController