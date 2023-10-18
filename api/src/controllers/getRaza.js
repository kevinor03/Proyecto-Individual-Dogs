const { default: axios } = require('axios');
const { Dog, Temperament } = require('../db')
const cleanerAPI = require('../utils/cleanerAPI')
const cleanerBD = require('../utils/cleanerBD')

const { API_KEY } = process.env

const getRazas = async () => {
   const infoBD = await Dog.findAll({
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
   })
   const razasBD = cleanerBD(infoBD)

   const infoAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
   const razasAPI = cleanerAPI(infoAPI)

   return [...razasBD, ...razasAPI]
}

const getTemperaments = async () => {
   let temps = [];
   const infoAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data

   infoAPI.map((data) => temps.push(data.temperament))

   const sinNull = temps.filter((temp) => temp !== null);
   const soloStrings = sinNull.join(",").trim().split(",");
   const sinEspacios = soloStrings.map(temp => temp.trim());
   const sinRepetidos = [...new Set(sinEspacios)];
   const finalTemps = sinRepetidos.filter(temp => temp !== "").sort();

   finalTemps.forEach(temp => {
      Temperament.findOrCreate({ where: { name: temp } })
   })

   const ordenList = await Temperament.findAll()
   return ordenList
}   

module.exports = { getRazas, getTemperaments }