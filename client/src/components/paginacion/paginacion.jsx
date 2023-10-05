import { useState } from "react"
import "./paginacion.scss"

const atr = "<"
const del = ">"

export const Paginacion = ({ pagina, setPagina, maximo }) => {

   const nextPage = () => {
      setPagina(parseInt(pagina) + 1);
   }

   const previusPage = () => {
      setPagina(parseInt(pagina) - 1);
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