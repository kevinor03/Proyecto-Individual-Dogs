import "./paginacion.scss"

const atr = "<"
const del = ">"

export const Paginacion = ({ pagina, setPagina, maximo }) => {  
   // recibo por props la pagina actual, para cambiar la pagina y el maximo de paginas 
   const nextPage = () => {
      setPagina(parseInt(pagina) + 1); // sube el imput de las paginas para que pase a la siguiente
   }

   const previusPage = () => {
      setPagina(parseInt(pagina) - 1); // baja el input de las paginas para que regrese a la anterior 
   }

   return (
      <div className="container">
         <button disabled={pagina === 1 || pagina < 1} onClick={previusPage}> {atr} </button>
         <p name="page" autoComplete="off">{pagina}</p>
         <p> de {maximo} </p>
         <button disabled={pagina === maximo || pagina > maximo} onClick={nextPage}> {del} </button>
      </div>
   )
}