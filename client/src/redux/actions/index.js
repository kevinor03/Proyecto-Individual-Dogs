import axios from 'axios'

export const GET_RAZAS = "GET_RAZAS"
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_BY_ID = "GET_BY_ID"
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

export const getNameRazas = (name) => {
   return async (dispatch) => {
      const response = await axios(`http://localhost:3001/name?name=${name}`)
      return dispatch({
         type: GET_BY_NAME,
         payload: response.data,
      })
   }
}

export const getById = (id) => {
   return async (dispatch) => {
      const response = await axios(`http://localhost:3001/dogs/${id}`)
      return dispatch({
         type: GET_BY_ID,
         payload: response.data,
      })
   }
}


export const resetFilter = () => {
   return {
      type: RESET
   }
}