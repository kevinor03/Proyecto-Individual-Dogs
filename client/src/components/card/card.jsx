import { Link } from 'react-router-dom'

import './card.css';

function Card({ raza }) {
   const { name, image, weight, id } = raza
   console.log(image)
   return (
      <div key={id} className='card'>
         <Link to={`/home/${id}`}>
            <h2>{name}</h2>
            <img className='image' src={image} alt={name} />
            <p>Temperaments: XD</p>
            <p>Weight: {weight} Kg</p>
         </Link>
      </div>
   );
}

export default Card;
