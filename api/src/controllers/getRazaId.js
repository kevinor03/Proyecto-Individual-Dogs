const axios = require("axios")
const { Dog, Temperament } = require('../db')
const { API_KEY } = process.env

// "idRaza" sera un INTEGER o un UUID y "source" sera "API" o "BD" 
async function getRazaId(idRaza, source) {
   if (source === "API") {
      const dog = (await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}&api_key=${API_KEY}`)).data
      const raza = {
         id: dog.id,
         name: dog.name,
         weight: dog.weight,
         height: dog.height,
         life_span: dog.life_span,
         temperament: dog.temperament,
         image: `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`,
      }
      return raza;
   } else {
      const dog = await Dog.findByPk(idRaza, {
         include: [
            {
               model: Temperament,
               as: 'temperaments',
               attributes: ["id", "name"],
               through: {
                  attributes: []
               }
            },
         ],
      });
      if (!dog) {
         throw Error('no se encontro el perro');
         const filteredData = { id: dog.id, name: dog.name }
      }
      return filteredData;
   }
}

async function getRazaName(name) {
   const dogBD = await Dog.findAll({ where: { name: name } })

   const razaBD = [{
      id: dogBD[0]?.id,
      name: dogBD[0]?.name,
      weight: dogBD[0]?.weight,
      height: dogBD[0]?.height,
      life_span: dogBD[0]?.life_span,
      temperament: dogBD[0]?.temperament,
      image: dogBD[0]?.image,
   }]

   const dogAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${API_KEY}`)).data

   const razaAPI = [{
      id: dogAPI[0]?.id,
      name: dogAPI[0]?.name,
      weight: dogAPI[0]?.weight.metric,
      height: dogAPI[0]?.height.metric,
      life_span: dogAPI[0]?.life_span,
      temperament: dogAPI[0]?.temperament,
      image: dogAPI[0]?.image.url,
   }]
   if (razaBD[0].id === undefined) {
      return [...razaAPI]
   } else if (razaAPI[0].id === undefined) {
      return [...razaBD]
   }
}


module.exports = { getRazaId, getRazaName }

