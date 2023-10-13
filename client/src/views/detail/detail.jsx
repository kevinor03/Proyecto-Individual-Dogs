import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'


import './detail.css';

function Detail() {
   const { id } = useParams(); //? recibe correctamente el id
   const navigate = useNavigate();
   const [character, setCharacter] = useState({})

   useEffect(() => {
      axios(`http://localhost:3001/dogs/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert("No hay personajes con ese ID");
            }
         }
      );
      return setCharacter({});
   }, [id]);

   const home = () => {
      navigate(-1);
   };

   return (
      <div>
         <h1>{character.name}</h1>
         <div className='position'>
            <img className='image' src={character.image} alt={character.name} />
         </div>
         <div className='datos'>
            <span>Weight: {character.weight?.metric || character.weight} Kg </span>
            <span>Height: {character.height?.metric || character.height} cm </span>
            <span>Life Span: {character.life_span}</span>
            <span>Temperaments: {character.temperament}</span>
            <span>{id}</span>
         </div>
         <button className='button' onClick={home}>Home</button>
      </div>
   );
}

export default Detail;
