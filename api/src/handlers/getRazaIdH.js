// https://api.thedogapi.com/v1/breeds/${id}?api_key=${API_KEY}

const { getRazaId, getRazaName } = require('../controllers/getRazaId')

const getRazaIdHandler = async (req, res) => {
   const { idRaza } = req.params;
   const source = isNaN(idRaza) ? "BD" : "API";

   try {
      const response = await getRazaId(idRaza, source)
      res.status(200).json(response)
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

const getRazaNameHandler = async (req, res) => {
   const { name } = req.query;
   try {
      const response = await getRazaName(name)
      res.status(200).json(response)
   } catch (error) {
      res.status(400).send({ error: error.message })
   }

}

module.exports = {
   getRazaIdHandler,
   getRazaNameHandler
}