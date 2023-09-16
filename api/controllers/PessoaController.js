const database = require('../models')

class PessoaController {
    static async PegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

  static async pegaUmaPessoa (req, res) {
    const{ id } = req.params
    try{
        const umaPessoa = await database.Pessoas.findOne({where: { id: Number(id) }})

    }catch (error){

    }
  } 
}

module.exports = PessoaController