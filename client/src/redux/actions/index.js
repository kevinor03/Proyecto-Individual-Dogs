import axios from 'axios'

export const GET_RAZAS = "GET_RAZAS"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const GET_BY_NAME = "GET_BY_NAME"
export const ORDER = "ORDER"
export const FILTER_T = "FILTER_T"
export const FILTER_O = "FILTER_O"
export const RESET = 'RESET'

export const getRazas = () => {
   return async (dispatch) => {
      const response = await axios('http://localhost:3001/dogs')
      return dispatch({
         type: GET_RAZAS,
         payload: response.data,
      })
   }
}

export const getTemperaments = () => {
   return async (dispatch) => {
      const { data } = await axios.get('http://localhost:3001/temperaments')
      return dispatch({
         type: GET_TEMPERAMENTS,
         payload: data,
      })
   }
} 

export const getNameRazas = (name) => {
   return async (dispatch) => {
      const response = await axios(`http://localhost:3001/name?name=${name}`)
      return dispatch({
         type: GET_BY_NAME,
         payload: response.data,
      })
   }
}

export const orderRazas = (order) => {
   return (dispatch) => {
      return dispatch({
         type: ORDER,
         payload: order
      })
   }
}

export const filterTemp = (temp) => {
   return (dispatch) => {
      return dispatch({
         type: FILTER_T,
         payload: temp
      })
   }
}

export const filterOrigin = (origin) => {
   return (dispatch) => {
      return dispatch({
         type: FILTER_O,
         payload: origin
      })
   }
}

export const resetFilter = () => {
   return {
      type: RESET
   }
}