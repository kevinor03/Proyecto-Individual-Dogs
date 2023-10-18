const { Dog, Temperament } = require('../db')

const createRaza = async (
   name, weight, height, life_span, image, temperaments
) => {

   try {
      const temperament = await Temperament.findAll({
         where: {
            name: temperaments
         },
      });
      const newDog = await Dog.create({
         name,
         weight,
         height,
         life_span,
         image,
         temperaments,
   });
      await newDog.setTemperaments(temperament);
      return newDog;
   } catch (error) {
      throw new Error(error.message);
   }



// const dogTemperaments = []
// for (let i = 0; i < temperaments.length; i++) {
//    const tempsId = await Temperaments.findAll({ where: { name: temperaments[i].name } })
//    dogTemperaments.push(tempsId[i])
// }

   // dogTemperaments
   // await newDog.addTemperament(temperaments)
   // return newDog
}

module.exports = { createRaza }

