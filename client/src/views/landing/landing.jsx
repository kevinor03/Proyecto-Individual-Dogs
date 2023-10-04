import { Link } from "react-router-dom";

import './landing.css'

function Landing() {
   return (
      <div>
         <div className="welcome">
            <h1>¡Bienvenido!</h1>
            <h2>¡Elija su raza de perro aqui!</h2>
         </div>
         <Link to='/home'>
            <button>¡Vamos!</button>
         </Link>
      </div>
   )
}

export default Landing;