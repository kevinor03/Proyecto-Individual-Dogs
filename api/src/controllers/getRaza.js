const { default: axios } = require('axios');
const { Dog, Temperament } = require('../db')
const cleanerAPI = require('../utils/cleanerAPI')
const cleanerBD = require('../utils/cleanerBD')

const { API_KEY } = process.env

const getRazas = async () => {

   const infoBD = await Dog.findAll()
   const razasBD = cleanerBD(infoBD)

   const infoAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
   const razasAPI = cleanerAPI(infoAPI)
   return [...razasBD, ...razasAPI]
}

const getTemperaments = async () => {
   const infoAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
   const temp = infoAPI.map((data) => {
      return { temperament: data.temperament }
   })
   const tempList = [];

   for (let i = 0; i < temp.length; i++) { //? leo la posicion i del array completo
      const tempInd = temp[i].temperament?.split(', ') //? separo el elemento i del array completo
      if (tempInd != undefined) {
         for (let i = 0; i < tempInd.length; i++) { //? leo la posicion separada 
            Temperament.findOrCreate({ //? busco o creo en la tabla de temperamentos
               where: { temperament: tempInd[i] }, //? busco o creo el temperamento de la posicion i del separado
            });
            if (!tempList.includes(tempInd[i])) {
               tempList.push(tempInd[i])
            }
         }
      }
   }
   return tempList
}

module.exports = { getRazas, getTemperaments }