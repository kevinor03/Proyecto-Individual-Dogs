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
         <div className='detail'>
         <h1>{character.name}</h1>
         <div className='position'>
            <img className='image' src={character.image} alt={character.name} />
         </div>
         <div className='datos'>
               <h3>Weight:</h3><span> {character.weight?.metric || character.weight} Kg </span>
               <h3>Height: </h3><span>{character.height?.metric || character.height} cm </span>
               <h3>Life Span:</h3><span> {character.life_span}</span>
               <h3>Temperaments:</h3><span> {character.temperament}</span>
            </div>
            <button className='button' onClick={home}>Home</button> <br />
            <span>id: {id}</span>
         </div>
      </div>
   );
}

export default Detail;
