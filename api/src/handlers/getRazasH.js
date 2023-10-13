// https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}

const { response } = require("../app");
const { getRazas, getTemperaments } = require("../controllers/getRaza");

const getRazaHandler = async (req, res) => {
   try {
      const response = await getRazas() //  controlador de getRaza
      res.status(200).send(response);
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

const getTemperamentHandler = async (req, res) => {
   try {
      const response = await getTemperaments()
      res.status(200).json(response);
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

module.exports = {
   getRazaHandler,
   getTemperamentHandler
}