import Card from '../card/card';

import './cards.css';

function Cards({ allRazas, pagina, porPagina }) {
   const razas = allRazas

   return ( // muestra las paginas actuales, la ultima y pasa por props todas las razas
      <div className='cards'> 
         {razas?.slice((pagina - 1) * porPagina, Math.ceil((pagina - 1) * porPagina + porPagina))
            .map(raza =>
            <Card raza={raza} />)}
      </div>
   );
}

export default Cards;
