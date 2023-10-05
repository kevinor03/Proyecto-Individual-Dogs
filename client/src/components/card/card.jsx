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
            <p>temperamentos: XD</p>
            <p>peso: {weight} Kgs</p>
         </Link>
      </div>
   );
}

export default Card;
