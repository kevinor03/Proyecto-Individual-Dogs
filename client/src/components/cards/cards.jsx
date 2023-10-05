import Card from '../card/card';

import './cards.css';

function Cards({ allRazas, pagina, porPagina }) {
   const razas = allRazas

   return (
      <div className='cards'>
         {razas?.slice((pagina - 1) * porPagina, Math.ceil((pagina - 1) * porPagina + porPagina))
            .map(raza =>
            <Card raza={raza} />)}
      </div>
   );
}

export default Cards;
