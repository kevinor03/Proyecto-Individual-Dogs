const { createRaza } = require('../controllers/postRaza')

const createRazaHandler = async (req, res) => {
   const { name, weight, height, life_span, image } = req.body
   try {
      const response = await createRaza(name, weight, height, life_span, image)
      res.status(200).json(response);
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

module.exports = createRazaHandler;
