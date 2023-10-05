import { useState } from 'react';
import { Link } from 'react-router-dom';

import './form.css';

function validate(input) {
   let error = [];
   let letter = /^([^a-zA-Z/@!?|~#^&%*=+:;.,$¿¡`'"_<>{}()]*)$/; // no permite letras ni simbolos excepto el "-"
   let symbol = /^([^/@!?|~#^&%*=+-:;.,$¿¡`'"_<>{}()]*)$/; // no permite numeros ni simbolos 
   let symbol2 = /^([^/@!?|~#^&%*=+:;.,$¿¡`'"_<>{}()]*)$/; // no permite simbolos excepto el "-"
   let symbol3 = /^([^/@!?|~#^&%*=+-:;.$¿¡`'"_<>{}()]*)$/; // no permite numeros ni simbolos excepto la ","

   if (!symbol.test(input.name)) {
      error.name = "No se permiten numeros ni simbolos"
   }
   if (!letter.test(input.weight)) {
      error.weight = "No se permiten letras, solo numeros y -"
   }
   if (!letter.test(input.height)) {
      error.height = "No se permiten letras, solo numeros y -"
   }
   if (!symbol2.test(input.life_span)) {
      error.life_span = "No se permiten simbolos, solo -"
   }
   if (!symbol3.test(input.temperament)) {
      error.temperament = "No se permiten numeros ni simbolos, solo ,"
   }

   return error;
}

function Form() {
   const [input, setInput] = useState({
      name: "",
      weight: "",
      height: "",
      life_span: "",
      temperament: [""],
      image: "",
   })

   const [error, setError] = useState({
      name: "",
      weight: "",
      height: "",
      life_span: "",
      temperament: [""],
      image: "",
   })

   function handleChange(e) {
      setInput({
         ...input,
         [e.target.name]: e.target.value,
      })
      setError(validate({
         ...input,
         [e.target.name]: e.target.value,
      }))

   }

   const handleSubmit = (e) => {
      e.preventDefault()
      
   }

   return (
      <div>
         <form onSubmit={null}>
            <div>
               <h1>Pagina de Agregado de Razas</h1>
               <Link to="/home">
            <button>Home</button>
         </Link>
               <label> Nombre: </label>
               <input type='text' placeholder='Nombre de raza' name="name" value={input.value} onChange={handleChange} /> <br />
               {<span>{error.name}</span> && error.name}
            </div>
            <div>
               <label> Peso: </label>
               <input type='text' placeholder='Aprox Kgs (1 - 2)' name="weight" value={input.value} onChange={handleChange} /> <br />
               {<span>{error.weight}</span> && error.weight}
            </div>
            <div>
               <label> Altura: </label>
               <input type='text' placeholder='Aprox cm (1 - 2)' name="height" value={input.value} onChange={handleChange} /> <br />
               {<span>{error.height}</span> && error.height}
            </div>
            <div>
               <label> Años de Vida: </label>
               <input type='text' placeholder='Aprox años (1 - 2 years)' name="life_span" value={input.value} onChange={handleChange} /> <br />
               {<span>{error.life_span}</span> && error.life_span}
            </div>
            <div>
               <label> Temperamentos: </label>
               <input type='text' placeholder='Los mas usuales' name="temperament" value={input.value} onChange={handleChange} /> <br />
               {<span>{error.temperament}</span> && error.temperament}
            </div>
            <div>
               <label> Imagen: </label>
               <input type='text' placeholder='URL (esto no es obligatorio)' name="image" value={input.value} onChange={handleChange} /> <br />
               {<span>{error.image}</span> && error.image}
            </div>
            <button type="submit">Enviar</button>
         </form>
      </div>
   );
}

export default Form;

// document.getElementById('miFormulario').addEventListener('submit', async (event) => {
//    event.preventDefault();
 
//    // Obtener los datos del formulario
//    const formData = new FormData(event.target);
 
//    // Realizar una solicitud POST al servidor
//    try {
//      const response = await fetch('/ruta-en-backend', {
//        method: 'POST',
//        body: formData,
//      });
 
//      if (response.ok) {
//        // El servidor respondió con éxito
//        console.log('Datos enviados y almacenados en la base de datos.');
//      } else {
//        console.error('Error al enviar datos al servidor.');
//      }
//    } catch (error) {
//      console.error('Error de red:', error);
//    }
//  });