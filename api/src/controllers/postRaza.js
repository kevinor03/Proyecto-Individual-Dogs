const { Dog, Temperaments } = require('../db')

const createRaza = async (name, weight, height, life_span, image, temperaments) => {
   const newDog = await Dog.create({
      name: name,
      weight: weight,
      height: height,
      life_span: life_span,
      image: image,
   });

// const dogTemperaments = []
// for (let i = 0; i < temperaments.length; i++) {
//    const tempsId = await Temperaments.findAll({ where: { name: temperaments[i].name } })
//    dogTemperaments.push(tempsId[i])
// }

   // dogTemperaments
   await newDog.addTemperament(temperaments)
   return newDog
}

module.exports = { createRaza }

