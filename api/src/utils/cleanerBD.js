const cleanerBD = (arr) => {
   return arr.map((data) => {
      return {
         id: data.id,
         created: data.created,
         name: data.name,
         weight: data.weight,
         height: data.height,
         life_span: data.life_span,
         temperament: data.temperament,
         image: data.image,
      }
   })
}

module.exports = cleanerBD