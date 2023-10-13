const { createRaza } = require('../controllers/postRaza')

const createRazaHandler = async (req, res) => {
   const { name, weight, height, life_span, temperament, image } = req.body
   try {
      const response = await createRaza(name, weight, height, life_span, temperament, image)
      res.status(200).json("Successfully created breed");
   } catch (error) {
      res.status(400).json("An error occurred while creating the race", { error: error.message })
   }
}

module.exports = createRazaHandler;
