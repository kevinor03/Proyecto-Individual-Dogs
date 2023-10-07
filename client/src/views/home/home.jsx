import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getNameRazas, getRazas, resetFilter, getTemperaments } from '../../redux/actions';

import NavBar from '../../components/navbar/navbar';
import Cards from '../../components/cards/cards';

import './home.css';
import { Paginacion } from '../../components/paginacion/paginacion';

function Home() {
   const dispatch = useDispatch()
   const allRazas = useSelector((state) => state.allRazas) // conexion al estado de razas
   // const allTemperaments = useSelector((state) => state.allTemperaments) // conexion al estado de temperamentos
   const [searchName, setSearchName] = useState("")
   const [pagina, setPagina] = useState(1)
   const [porPagina, setPorPagina] = useState(8)
   const maximo = Math.ceil(allRazas.length / porPagina)

   function handleChange(e) {
      e.preventDefault()
      setSearchName(e.target.value)
   }

   function handleSubmit(e) {
      e.preventDefault()
      if (e) {
         dispatch(getNameRazas(searchName))
      } else {
         dispatch(getRazas())
      }
   }

   function handleReset(e) {
      e.preventDefault()
      dispatch(resetFilter())
   }

   useEffect(() => {
      dispatch(getRazas(), getTemperaments())
      //return (()=>{"clearDetail()"}) //? el return limpia el estado, habria que averiguar como funciona
   }, [dispatch])

   return (
      <div>
         <div className='home'>
            <h2 className='title'> Proyecto <span className='span'>Dogs</span></h2>
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
