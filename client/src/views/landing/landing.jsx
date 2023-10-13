import { Link } from "react-router-dom";

import './landing.css'

function Landing() {
   return (
      <body className="backgroundL">
         <div className="welcome">
            <h2>Proyect Dogs</h2>
         </div>
         <Link to='/home'>
            <button className="enter">Enter</button>
         </Link>
      </body>
   )
}

export default Landing;