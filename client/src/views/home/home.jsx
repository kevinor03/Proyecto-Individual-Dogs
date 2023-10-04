import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getNameRazas, getRazas, resetFilter } from '../../redux/actions';

import NavBar from '../../components/navbar/navbar';
import Cards from '../../components/cards/cards';

import './home.css';

function Home() {
   const dispatch = useDispatch()
   const allRazas = useSelector((state) => state.allRazas) // conexion al estado de razas
   // const allTemperaments = useSelector((state) => state.allTemperaments) // conexion al estado de temperamentos
   const [searchName, setSearchName] = useState("")

   function handleChange(e) {
      e.preventDefault()
      setSearchName(e.target.value)
   }

   function handleSubmit(e) {
      e.preventDefault()
      dispatch(getNameRazas(searchName))
   }

   function handleReset(e) {
      e.preventDefault()
      dispatch(resetFilter())
   }

   useEffect(() => {
      dispatch(getRazas())
      //return (()=>{"clearDetail()"}) //? el return limpia el estado, habria que averiguar como funciona
   }, [dispatch])

   return (
      <div className='home'>
         <h2 className='title'> Proyecto <span className='span'>Dogs</span></h2>
         <div className='welcome'>
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit} handleReset={handleReset} />
         </div>
         <Cards allRazas={allRazas} />
      </div>
   );
}

export default Home;
