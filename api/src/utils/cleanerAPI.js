const cleanerAPI = (arr) => {
   return arr.map((data) => {
      return {
         id: data.id,
         name: data.name,
         weight: data.weight.metric,
         height: data.height.metric,
         life_span: data.life_span,
         temperament: data.temperament,
         image: data.image.url,
      }
   })
}

module.exports = cleanerAPI