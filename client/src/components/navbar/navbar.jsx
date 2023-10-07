import BurgerButton from "./burgerButton";
import { SearchInput, SearchIcon, SearchIconBox, NavContainer } from "./navbar_styled";
import { Link } from "react-router-dom";

function NavBar({ handleChange, handleSubmit, handleReset }) {
   return (
      <div>
         <form onChange={handleChange}>
            <NavContainer>
               <select> {/* ORDENAMIENTO */}
                  <option>Name A-Z</option>
                  <option>Weight Asc-Des</option>
               </select>
               <select> {/* FILTRO 1 */}
                  <option>Temperaments</option>
               </select>
               <select> {/* FILTRO 2 */}
                  <option>BDD</option>
                  <option>API</option>
               </select>
               <SearchInput type='search' placeholder="Search for Name" /> {/* search bar */}
               <SearchIconBox>
                  <SearchIcon type='submit' onClick={handleSubmit} /> {/* boton de busqueda */}
               </SearchIconBox>
               <Link to="/form">
                  <button>Add</button>
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
