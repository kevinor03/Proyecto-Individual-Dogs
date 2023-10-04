// import Cards from '../../components/cards/cards';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getById } from '../../redux/actions';
import { useEffect, useState } from 'react';


import './detail.css';

function Detail() {
   const dispatch = useDispatch();
   const { id } = useParams(); //? recibe correctamente el id

   function handleGetId(e) {
      dispatch(getById(e))
   }

   const { data } = getById(id)
   console.log(data)

   return (
      <div>
         <h1>Pagina de Detalles de {id} </h1>
      </div>
   );
}

export default Detail;
