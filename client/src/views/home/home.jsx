import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNameRazas, getRazas, resetFilter, getTemperaments } from '../../redux/actions';

import NavBar from '../../components/navbar/navbar';
import Cards from '../../components/cards/cards';

import './home.css';
import { Paginacion } from '../../components/paginacion/paginacion';

function Home() {
   const dispatch = useDispatch()
   const allRazas = useSelector((state) => state.allRazas) // conexion al estado de razas
   const [searchName, setSearchName] = useState("") // estado para guardar el nombre
   const [pagina, setPagina] = useState(1) // cantidad de paginas 
   const [porPagina, setPorPagina] = useState(8) // cantidad de tarjetas por pagina
   const maximo = Math.ceil(allRazas.length / porPagina) // paginas maximas que se utilizan

   function handleChange(e) { // funciona que toma el nombre y lo guarda en un estado
      e.preventDefault()
      setSearchName(e.target.value)
   }

   function handleSubmit(e) { // funcion que despacha la funcion para buscar por nombre, segun el nombre del estado
      e.preventDefault()
      if (searchName) {
         dispatch(getNameRazas(searchName))
      } else {
         dispatch(getRazas())
      } 
   }

   function handleReset(e) { // funcion que resetea todos los filtros y las tarjetas
      e.preventDefault()
      dispatch(resetFilter())
   }

   useEffect(() => { // cada que se ingresa a la pagina home se resetean las tarjetas, los temperamentos y los filtros
      dispatch(getRazas())
      dispatch(getTemperaments())
      dispatch(resetFilter())
   }, [dispatch])

   return (
      <div className='backgroundH'>
         <div className='home'>
            <h2 className='title'> Proyect <span className='span'>Dogs</span></h2>
            <div>
               <NavBar handleChange={handleChange} handleSubmit={handleSubmit} handleReset={handleReset} />
            </div>
            <Cards allRazas={allRazas} pagina={pagina} porPagina={porPagina} />
         </div>
         <div>
            <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
         </div>
      </div>
   );
}

export default Home;
