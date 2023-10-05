import BurgerButton from "./burgerButton";
import { SearchInput, SearchIcon, SearchIconBox, NavContainer } from "./navbar_styled";
import { Link } from "react-router-dom";

function NavBar({ handleChange, handleSubmit, handleReset }) {
   return (
      <div>
         <form onChange={handleChange}>
            <NavContainer>
               <select>
                  <option>Nombre A-Z</option>
                  <option>Peso May-Mer</option>
               </select>
               <select>
                  <option>Temperamentos</option>
               </select>
               <select>
                  <option>BDD</option>
                  <option>API</option>
               </select>
               <SearchInput type='search' placeholder="Busqueda por Nombre" />
               <SearchIconBox>
                  <SearchIcon type='submit' onClick={handleSubmit} />
               </SearchIconBox>
               <Link to="/form">
                  <button>Agregar</button>
               </Link>
               <button onClick={handleReset}>Reset</button>
               <Link to='/'>
                  <BurgerButton />
               </Link>
            </NavContainer>
         </form>
      </div>
   );
}

export default NavBar;
