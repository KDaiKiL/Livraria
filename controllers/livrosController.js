const { Livro } = require('../models')

const livrosController = {
    index: async (req, res) => {
        const livros = await Livro.findAll()
        res.json(livros)
    },
    book: async (req, res) => {
        const { id } = req.params
        const livro = await Livro.findByPk(id)
        if (!livro) {
            res.status(404).json("Livro não encontrado")
        } else {
            res.json(livro)
        }
    },
    newBook: async (req, res) => {
        const { titulo, quantidade_paginas, autor, ano_lancamento, estoque } = req.body
        const livro = await Livro.create({
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        })
        res.status(201).json(livro)
    },
    livrosUpp: async (req, res) => {
        const { id } = req.params
        const livro = await Livro.findByPk(id)
        if (!livro) {
            res.status(404).json("Livro não encontrado")
        } else {
            await Livro.update(req.body, {
                where: {
                    id
                }
            })
            res.json("Livro atualizado")
        }
    },
    livrosDown: async (req, res) => {
        const { id } = req.params
        const livro = await Livro.findByPk(id)
        if (!livro) {
            res.status(404).json("Livro não encontrado")
        } else {
            await Livro.destroy({
                where: {
                    id
                }
            })
        }
    }
}

module.exports = livrosController