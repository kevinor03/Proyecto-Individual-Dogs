// https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}

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
      await getTemperaments()
      const response = "Temperamentos subidos correctamente a la BD"
      res.status(200).json(response);
   } catch (error) {
      res.status(400).json("la wea no quiere leer el split")
   }

}

module.exports = {
   getRazaHandler,
   getTemperamentHandler
}