import { Link } from 'react-router-dom'

import './card.css';

function Card({ raza }) {
   const { name, image, weight, id, temperament } = raza
   if (!name) {
      alert("That breed was not found")
   }
   return (
      <div key={id} className='card'>
         <Link to={`/home/${id}`}>
            <h2>{name}</h2>
            <img className='image' src={image} alt={name} />
            <h3>Temperaments</h3> <p>{temperament}</p>
            <h3>Weight</h3><p> {weight} Kg</p>
         </Link>
      </div>
   );
}

export default Card;
