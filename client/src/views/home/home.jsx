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

   function handleChange(e) {
      e.preventDefault()
      setSearchName(e.target.value)
   }

   function handleSubmit(e) {
      e.preventDefault()
      if (searchName) {
         dispatch(getNameRazas(searchName))
         setSearchName()
      } else {
         dispatch(getRazas())
      } 
   }

   function handleReset(e) {
      e.preventDefault()
      dispatch(resetFilter())
   }

   useEffect(() => {
      dispatch(getRazas())
      dispatch(getTemperaments())
      dispatch(resetFilter())
   }, [dispatch])

   return (
      <div>
         <div className='home'>
            <h2 className='title'> Proyect <span className='span'>Dogs</span></h2>
            <div className='welcome'>
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
