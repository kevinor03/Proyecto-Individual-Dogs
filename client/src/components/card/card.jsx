import { Link } from 'react-router-dom'

import './card.css';

function Card({ raza }) {
   const { name, image, weight, id, temperament } = raza
   if (!name) { // si no hay name(undefined) muestra un error
      alert("That breed was not found, please press the RESET button")
   } else { // sino muestra las cards correspondientes
   return (
      <div key={id} className='card'>
         <Link className="link" to={`/home/${id}`}>
            <h2>{name}</h2>
            <img className='image' src={image} alt={name} />
            <h3>Temperaments</h3> <p>{temperament}</p>
            <h3>Weight</h3><p> {weight} Kg</p>
         </Link>
      </div>
   );
}
}

export default Card;
