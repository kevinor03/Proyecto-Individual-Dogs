const { createRaza } = require('../controllers/postRaza')

const createRazaHandler = async (req, res) => {
   const { name, weight, height, life_span, temperament, image } = req.body
   try {
      const response = await createRaza(name, weight, height, life_span, temperament, image)
      res.status(200).json("Raza creada exitosamente");
   } catch (error) {
      res.status(400).json("Se produjo un error al crear la raza", { error: error.message })
   }
}

module.exports = createRazaHandler;
