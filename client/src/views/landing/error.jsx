import { Link } from 'react-router-dom'

export default function Error() {
   return (
      <div>
         <h1>ERROR 404</h1>
         <h2>aqui no hay nada.</h2>
         <Link to="/">
            <button>Home</button>
         </Link>
      </div>
   )
}