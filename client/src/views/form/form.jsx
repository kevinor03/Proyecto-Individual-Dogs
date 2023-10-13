import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getRazas, resetFilter } from '../../redux/actions';

import './form.css';

function validate(input) {
   let error = [];
   let symbol = /^([^/@!?|~#^&%*=+-:;.,$¿¡`'"_<>{}()]*)$/; // no permite numeros ni simbolos
   let symbol2 = /^([^0-9-/@!?|~#^&%*=+$:;.¿¡`'"_<>{}()]*)$/; // no permite numeros ni simbolos excepto la ","

   if (!symbol.test(input.name)) {
      error.name = "No se permiten numeros ni simbolos"
   }
   if (!symbol2.test(input.temperament)) {
      error.temperament = "No se permiten numeros ni simbolos, solo ,"
   }
   if (input.minWeight <= 0) {
      error.minWeight = "The minimum weight cannot be less than 1"
   }
   if (input.minWeight >= 57) {
      error.minWeight = "The minimum weight cannot be greater than 56"
   }
   if (input.maxWeight <= 2) {
      error.maxWeight = "The maximum weight cannot be less than 3"
   }
   if (input.maxWeight >= 90) {
      error.maxWeight = "The maximum weight cannot be greater than 89"
   }
   if (input.minHeight <= 14) {
      error.minHeight = "The minimum height cannot be less than 14"
   }
   if (input.minHeight >= 72) {
      error.minHeight = "The minimum height cannot be greater than 72"
   }
   if (input.maxHeight <= 22) {
      error.maxHeight = "The maximum height cannot be less than 22"
   }
   if (input.maxHeight >= 90) {
      error.maxHeight = "The maximum height cannot be greater than 90"
   }
   if (input.minLife_span <= 0) {
      error.minLife_span = "The minimum age cannot be less than 1"
   }
   if (input.minLife_span >= 16) {
      error.minLife_span = "The minimum age cannot be greater than 15"
   }
   if (input.maxLife_span <= 7) {
      error.maxLife_span = "The maximum age cannot be less than 8"
   }
   if (input.maxLife_span >= 21) {
      error.maxLife_span = "The maximum age cannot be greater than 20"
   }
   return error;
}

function Form() {
   const dispatch = useDispatch()

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
      minHeight: "",
      maxHeight: "",
      minWeight: "",
      maxWeight: "",
      minLife_span: "",
      maxLife_span: "",
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
         alert('Please complete the required fields.');
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

         console.log(newDog)

         await axios.post('http://localhost:3001/postdogs', newDog)

         window.alert("¡The breed has been successfully created! :D")
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

         dispatch(getRazas())
         dispatch(resetFilter())

      } catch (error) {
         console.error({ error: error.message });
         window.alert('Something went wrong when creating the race, try again :C');
      }
   }

   function unSubmit() {
      let noBoton;
      for (let e in error) {
         if (error[e] === '') noBoton = false
         else {
            noBoton = true
            break;
         }
      }
      return noBoton;
   }

   return (

      <div className='backgroundF'>
         <form className="form" onSubmit={handleSubmit}>

            <h1 className='titleForm'>Raza Add Page</h1>

            <div className='selectForm'>
               <label> Name: <input className="imputs"
                  type='text'
                  placeholder='Raza name'
                  name="name"
                  value={data.name}
                  onChange={handleChange} /> <br />
               <span>{error.name}</span> <br />
               </label>

               <label> Minimum weight: <input className="imputs"
                  type='number'
                  placeholder='Min'
                  name="minWeight"
                  value={data.minWeight}
                  onChange={handleChange}

               /><br /> <span>{error.minWeight}</span>
               </label><br /> 

               <label>Maximum weight: <input className="imputs"
                  type='number'
                  placeholder='Max'
                  name="maxWeight"
                  value={data.maxWeight}
                  onChange={handleChange}
               /><br /> <span>{error.maxWeight}</span>
               </label><br />

               <label> Minimum height: <input className="imputs"
                  type='number'
                  placeholder='Min'
                  name="minHeight"
                  value={data.minHeight}
                  onChange={handleChange}
               /><br /> <span>{error.minHeight}</span>
               </label><br />

               <label> Maximum height: <input className="imputs"
                  type='number'
                  placeholder='Max'
                  name="maxHeight"
                  value={data.maxHeight}
                  onChange={handleChange}
               /><br /> <span>{error.maxHeight}</span>
               </label> <br />

               <label> Minimum years of life: <input className="imputs"
                  type='number'
                  placeholder='Min'
                  name="minLife_span"
                  value={data.minLife_span}
                  onChange={handleChange}
               /><br /> <span>{error.minLife_span}</span>
               </label><br />

               <label> Maximum years of life: <input className="imputs"
                  type='number'
                  placeholder='Max'
                  name="maxLife_span"
                  value={data.maxLife_span}
                  onChange={handleChange}
               /><br /> <span>{error.maxLife_span}</span>
               </label><br />

               <label> Temperaments: <input className="imputs"
                  type='text'
                  placeholder='More usual'
                  name="temperament"
                  value={data.temperament}
                  onChange={handleChange} /> <br />
               <span>{error.temperament}</span><br />
               </label>

               <label> Image: <input className="imputs"
                  type='text'
                  placeholder='URL (not required)'
                  name="image"
                  value={data.image}
                  onChange={handleChange}
               /> </label><br />

               <button disabled={unSubmit()} className='buttonFormAdd' type="submit">Add</button>
            <Link to="/home">
                  <button className='buttonFormHome'>Home</button>
            </Link>
            </div>
         </form>
      </div>
   );
}

export default Form;