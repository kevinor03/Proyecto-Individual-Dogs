const { Dog } = require('../db')

const createRaza = async (name, weight, height, life_span, temperament, image) => {
   const newDog = await Dog.create({ name, weight, height, life_span, temperament, image });

   await newDog.save()
   const allRazas = await Dog.findAll()
   return allRazas
}

module.exports = { createRaza }

