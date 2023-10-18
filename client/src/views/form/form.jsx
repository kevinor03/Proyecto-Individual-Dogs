import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getRazas, resetFilter, getTemperaments } from '../../redux/actions';

import './form.css';

function validate(input) { // funcion para validar los inputs
   let error = [];
   let symbol = /^([^/@!?|~#^&%*=+-:;.,$¿¡`'"_<>{}()]*)$/; // no permite numeros ni simbolos
   // let symbol2 = /^([^0-9-/@!?|~#^&%*=+$:;.¿¡`'"_<>{}()]*)$/; // no permite numeros ni simbolos excepto la "," 

   if (!symbol.test(input.name)) {
      error.name = "No se permiten numeros ni simbolos"
   }

   if (input.minWeight <= 0) {
      error.minWeight = "The minimum weight cannot be less than 1"
      // } else if (input.minWeight >= input.maxWeight) {
      //    error.minWeight = "The minimum weight cannot be less greater the maximum weight"
   } else if (input.minWeight >= 57) {
      error.minWeight = "The minimum weight cannot be greater than 56"
   }

   if (input.maxWeight <= 2) {
      error.maxWeight = "The maximum weight cannot be less than 3"
   } else if (input.maxWeight <= input.minWeight) {
      error.maxWeight = "The maximum weight cannot be less than the minimum weight"
   } else if (input.maxWeight >= 90) {
      error.maxWeight = "The maximum weight cannot be greater than 89"
   }

   if (input.minHeight <= 14) {
      error.minHeight = "The minimum height cannot be less than 14"
   } else if (input.minHeight >= 72) {
      error.minHeight = "The minimum height cannot be greater than 72"
   }

   if (input.maxHeight <= 22) {
      error.maxHeight = "The maximum height cannot be less than 22"
   } else if (input.maxHeight <= input.minHeight) {
      error.maxHeight = "The maximum height cannot be less than the minimum height"
   } else if (input.maxHeight >= 90) {
      error.maxHeight = "The maximum height cannot be greater than 90"
   }


   if (input.minLife_span <= 0) {
      error.minLife_span = "The minimum age cannot be less than 1"
   } else if (input.minLife_span >= 16) {
      error.minLife_span = "The minimum age cannot be greater than 15"
   }

   if (input.maxLife_span <= 7) {
      error.maxLife_span = "The maximum age cannot be less than 8"
   } else if (input.maxLife_span <= input.minLife_span) {
      error.maxLife_span = "The maximum age cannot be less than the minimum age"
   } else if (input.maxLife_span >= 21) {
      error.maxLife_span = "The maximum age cannot be greater than 20"
   }

   return error;
}

//!-------------------------------------------------------------------

function Form() {
   const dispatch = useDispatch()
   const allTemperaments = useSelector((state) => state.allTemperaments)

   useEffect(() => {
      dispatch(getTemperaments())
   }, [])

   const [data, setData] = useState({ // estado para guardar los inputs
      name: "",
      image: "",
      minHeight: "",
      maxHeight: "",
      minWeight: "",
      maxWeight: "",
      minLife_span: "",
      maxLife_span: "",
      temperaments: [],
   });

   const [error, setError] = useState({ // estado para guardar los errores
      name: "",
      minHeight: "",
      maxHeight: "",
      minWeight: "",
      maxWeight: "",
      minLife_span: "",
      maxLife_span: "",
      // temperaments: "",
   });

   const [temperaments, setTemperament] = useState()

   function handleChange(e) { // funcion para agregar los inputs en tiempo real al estado data
      const { name, value } = e.target;

      if (name === 'temperaments') {
         if (data.temperaments.includes(value)) {
            return
         }
         setData({ ...data, [name]: [...data[name], value] });
      } else {
         setData({ ...data, [name]: value });
      }
      setError(validate({ ...data, [name]: value }))
   }

   const handleTemperaments = (e) => {
      const tempValue = e.target.value;
      if (e.target.select) {
         setTemperament([...temperaments, tempValue]);
      } else {
         setTemperament(temperaments.filter((temperament) => temperament !== tempValue));
      }
   }

   // function handleChangeTemp(e) {
   //    const selectedOptions = Array.from(e.target.selectedOptions, (option) =>
   //       parseInt(option.value)
   //    );

   //    setData({
   //       ...data,
   //       temperaments: selectedOptions,
   //    });
   //    console.log(data.temperaments)
   // };

   const handleSubmit = async (e) => { // funcion que valida y agrega los datos a la base de datos y limpia los inputs puestos 
      e.preventDefault()
      if (!data.name
         || !data.minHeight
         || !data.maxHeight
         || !data.minWeight
         || !data.maxWeight
         || !data.minLife_span
         || !data.maxLife_span) {
         alert('Please complete the required fields.');
         return;
      }
      console.log(data)
      let newDog = {
         name: data.name,
         image: data.image,
         weight: `${data.minWeight} - ${data.maxWeight}`,
         height: `${data.minHeight} - ${data.maxHeight}`,
         life_span: `${data.minLife_span} - ${data.maxLife_span} years`,
         temperaments: data.temperaments
      }

      try {
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
            temperaments: [],
         })
         setTemperament([])
         dispatch(getRazas())
         dispatch(resetFilter())

      } catch (error) {
         console.error(error);
         window.alert('Something went wrong when creating the breed, try again :C');
      }
   }

   const handleDelete = (e) => {
      const { name, id } = e.target

      setData({
         ...data,
         [name]: [...data[name].filter(t => t !== id)]
      })
   }

   function unSubmit() { // funcion para que se bloquee el boton si hay algun error en los inputs
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

               <label> Image: <input className="imputs"
                  type='text'
                  placeholder='URL (not required)'
                  name="image"
                  value={data.image}
                  onChange={handleChange}
               /> </label><br />

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

               <label> Temperaments: </label>
               <select onChange={handleChange} id="temperaments" name="temperaments" value={data.temperaments}>
                  <option>temperaments</option>
                  {allTemperaments?.map((t) => <option value={t.name} key={t.name}>{t.name}</option>)}
               </select> <br />
               <div>
                  {
                     data.temperaments?.map((t) =>
                        <div>
                           <label>{t}</label>
                           <button type='button' name="temperaments" id={t} onClick={handleDelete}>X</button>
                        </div>)
                  }
               </div>

               {/* <select
                  multiple
                  id="temperaments"
                  name="temperaments"
                  value={data.temperaments}
                  onChange={handleChangeTemp}>
                  {allTemperaments?.map((temp) => (
                     <option key={temp.id} value={temp.id}>
                        {temp.name}
                     </option>
                  ))}
               </select> */}

               <input disabled={unSubmit()} className='buttonFormAdd' type="submit" />
            <Link to="/home">
                  <button className='buttonFormHome'>Home</button>
            </Link>
            </div>
         </form>
      </div>
   );
}

export default Form;