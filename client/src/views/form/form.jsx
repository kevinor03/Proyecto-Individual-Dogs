import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './form.css';

function validate(input) {
   let error = [];
   let symbol = /^([^/@!?|~#^&%*=+-:;.,$¿¡`'"_<>{}()]*)$/; // no permite numeros ni simbolos
   let symbol2 = /^([^/@!?|~#^&%*=+$:;.¿¡`'"_<>{}()]*)$/; // no permite numeros ni simbolos excepto la ","

   if (!symbol.test(input.name)) {
      error.name = "No se permiten numeros ni simbolos"
   }
   if (!symbol2.test(input.temperament)) {
      error.temperament = "No se permiten numeros ni simbolos, solo ,"
   }
   return error;
}

function Form() {
   const [data, setData] = useState({
      name: "",
      image: "",
      minHeight: "",
      maxHeight: "",
      minWeight: "",
      maxWeight: "",
      minLife_span: "",
      maxLife_span: "",
      temperament: [],
   });

   const [error, setError] = useState({
      name: "",
      temperament: "",
   });

   function handleChange(e) {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
      setError(validate({ ...error, [name]: value }))
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      if (!data.name || !data.temperament) {
         alert('Por favor, complete los campos obligatorios.');
         return;
      }

      try {
         let newDog = {
            name: data.name,
            image: data.image,
            weight: `${data.minWeight} - ${data.maxWeight}`,
            height: `${data.minHeight} - ${data.maxHeight}`,
            life_span: `${data.minLife_span} - ${data.maxLife_span}`,
            temperament: data.temperament
         }
         await axios.post('http://localhost:3001/postdogs', newDog)

         window.alert("¡La raza a sido creada con exito! :D")
         setData({
            name: "",
            image: "",
            minHeight: "",
            maxHeight: "",
            minWeight: "",
            maxWeight: "",
            minLife_span: "",
            maxLife_span: "",
            temperament: [],
         })

      } catch (error) {
         console.error('Error al enviar los datos al servidor:', error);
         window.alert('Hubo un error al crear la raza de perro :C');
      }
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <h1>Raza Add Page</h1>

            <label> Name:
               <input type='text' placeholder='Raza name' name="name" value={data.name} onChange={handleChange} /> <br />
               <span>{error.name}</span> <br />
            </label>

            <label> Minimum weight:
               <input type='number' placeholder='Min' name="minWeight" value={data.minWeight} onChange={handleChange} /> <br />
            </label>

            <label>Maximum weight:
               <input type='number' placeholder='Max' name="maxWeight" value={data.maxWeight} onChange={handleChange} /> <br />
            </label>

            <label> Minimum height:
               <input type='number' placeholder='Min' name="minHeight" value={data.minHeight} onChange={handleChange} /> <br />
            </label>

            <label> Maximum height:
               <input type='number' placeholder='Max' name="maxHeight" value={data.maxHeight} onChange={handleChange} /> <br />
            </label>

            <label> Minimum years of life:
               <input type='number' placeholder='Min' name="minLife_span" value={data.minLife_span} onChange={handleChange} /> <br />
            </label>

            <label> Maximum years of life:
               <input type='number' placeholder='Max' name="maxLife_span" value={data.maxLife_span} onChange={handleChange} /> <br />
            </label>

            <label> Temperaments:
               <input type='text' placeholder='More usual' name="temperament" value={data.temperament} onChange={handleChange} /> <br />
               <span>{error.temperament}</span><br />
            </label>

            <label> Image:
               <input type='text' placeholder='URL (not required)' name="image" value={data.image} onChange={handleChange} /> <br />
            </label>

            <button type="submit">Add</button>
            <Link to="/home">
               <button>Home</button>
            </Link>
         </form>
      </div>
   );
}

export default Form;