const axios = require("axios")
const { Dog } = require('../db')
const { API_KEY } = process.env

// "idRaza" sera un INTEGER o un UUID y "source" sera "API" o "BD" 
async function getRazaId(idRaza, source) {
   if (source === "API") {
      const dog = (await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}?api_key=${API_KEY}`)).data
      const raza = {
         id: dog.id,
         name: dog.name,
         weight: dog.weight,
         height: dog.height,
         life_span: dog.life_span,
         temperament: dog.temperament,
         image: dog.image,
      }
      return raza;
   } else {
      const dog = await Dog.findByPk(idRaza);
      return dog;
   }
}

async function getRazaName(name) {
   const razaAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${API_KEY}`)).data
   // const razaAPI = {
   //    id: dogAPI.id,
   //    name: dogAPI.name,
   //    weight: dogAPI.weight,
   //    height: dogAPI.height,
   //    life_span: dogAPI.life_span,
   //    temperament: dogAPI.temperament,
   //    image: dogAPI.image,
   // }
   const razaBD = await Dog.findAll({ where: { name: name } })
   return [...razaBD, ...razaAPI]
}

module.exports = { getRazaId, getRazaName }

