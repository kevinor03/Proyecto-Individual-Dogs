const { createRaza } = require('../controllers/postRaza')

// temperament,

const createRazaHandler = async (req, res) => {
   const { name, weight, height, life_span, image, temperaments } = req.body
   try {
      const response = await createRaza(name, weight, height, life_span, image, temperaments)
      res.status(200).json(response);
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

module.exports = createRazaHandler;
