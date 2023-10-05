// import Cards from '../../components/cards/cards';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getById } from '../../redux/actions';
import { useEffect, useState } from 'react';



import './detail.css';

function Detail() {
   const dispatch = useDispatch();
   const { id } = useParams(); //? recibe correctamente el id

   const data = (id) => {
      dispatch(getById(id))
   }

   const info = data(id)
   console.log(info)

   return (
      <div>
         <h1>Pagina de Detalles de {id} </h1>
         <p>{info}</p>
         <Link to="/home">
            <button>Home</button>
         </Link>

      </div>
   );
}

export default Detail;
