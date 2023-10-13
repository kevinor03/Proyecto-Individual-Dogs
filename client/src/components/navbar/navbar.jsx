import { SearchInput, SearchIcon, IconBox, NavContainer, ExitIcon } from "./navbar_styled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { orderRazas, filterTemp, filterOrigin } from '../../redux/actions/index'

function NavBar({ handleChange, handleSubmit, handleReset }) {
   const dispatch = useDispatch()
   const allTemperaments = useSelector((state) => state.allTemperaments)
   const order = useSelector((state) => state.filters.order)
   const filterT = useSelector((state) => state.filters.filterT)
   const filterO = useSelector((state) => state.filters.filterO)

   const handleOrder = (e) => { // funcion que agarra el input de ordenamiento
      dispatch(orderRazas(e.target.value))
   }
   const handleFilterTemp = (e) => { // funcion que agarra el input de temperamentos
      dispatch(filterTemp(e.target.value))
   }
   const handleFilterOrigin = (e) => {// funcion que agarra el input del origen
      dispatch(filterOrigin(e.target.value))
   }

   return (
      <div>
         <form onChange={handleChange}>
            <NavContainer>
               <select name="order" value={order} onChange={handleOrder}> {/* ORDENAMIENTO */}
                  <option value="All">Order</option>
                  <option value="Name Asc">Name A-Z</option>
                  <option value="Name Des">Name Z-A</option>
                  <option value="Weight Asc">Weight Asc</option>
                  <option value="Weight Des">Weight Des</option>
               </select>
               <select name="temp" value={filterT} onChange={handleFilterTemp}> {/* FILTRO 1 */}
                  <option value="All">All</option>
                  {allTemperaments.map((temp) => {
                     return (
                        <option value={temp} key={temp}>{temp.toUpperCase()}</option>
                     )
                  })}
               </select>
               <select name="origin" value={filterO} onChange={handleFilterOrigin}> {/* FILTRO 2 */}
                  <option value="All">All</option>
                  <option value="DB">DB</option>
                  <option value="API">API</option>
               </select>
               <SearchInput type='search' placeholder="Search for Name" /> {/* search bar */}
               <IconBox>
                  <SearchIcon type='submit' onClick={handleSubmit} /> {/* boton de busqueda */}
               </IconBox>
               <Link to="/form"> {/* boton que lleva al form */}
                  <button>Add</button>
               </Link>
               <button onClick={handleReset}>Reset</button> {/* boton que resetea filtros y tarjetas */}
               <Link to='/'>
                  <IconBox>
                     <ExitIcon /> {/* boton que lleva a la landing page */}
                  </IconBox>
               </Link>
            </NavContainer>
         </form>
      </div>
   );
}

export default NavBar;
