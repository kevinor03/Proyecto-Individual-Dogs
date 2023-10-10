import { Link } from "react-router-dom";

import './landing.css'

function Landing() {
   return (
      <div>
         <div className="welcome">
            <h2>¡Welcome Back!</h2>
         </div>
         <Link to='/home'>
            <button>¡Vamos!</button>
         </Link>
      </div>
   )
}

export default Landing;