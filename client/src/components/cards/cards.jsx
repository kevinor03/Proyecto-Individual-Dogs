import Card from '../card/card';

import './cards.css';

function Cards({ allRazas }) {
   const razas = allRazas

   return (
      <div className='cards'>
         {razas?.map(raza =>
            <Card raza={raza} />)}
      </div>
   );
}

export default Cards;
