const { Dog } = require('../db')

const createRaza = async (name, weight, height, life_span, image) => {
   return await Dog.create({ name, weight, height, life_span, image });
}

module.exports = { createRaza }

