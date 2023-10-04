const { Dog } = require('../db')

const createRaza = async (name, weight, height, life_span, temperament, image) => {
   return await Dog.create({ name, weight, height, life_span, temperament, image });
}

module.exports = { createRaza }

