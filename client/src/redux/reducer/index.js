const { GET_RAZAS, GET_BY_NAME, GET_BY_ID, RESET } = require("../actions");

let initialState = { allRazas: [], copyRazas: [], allTemperaments: [] }

function rootReducer(state = initialState, action) {
   switch (action.type) {
      case GET_RAZAS:
         return {
            ...state,
            allRazas: action.payload,
            copyRazas: action.payload,
         };
      case GET_BY_NAME:
         return {
            ...state,
            allRazas: action.payload,
         };
      case GET_BY_ID:
         return {
            ...state,
            allRazas: action.payload
         };
      case RESET:
         return {
            ...state,
            allRazas: [...state.copyRazas]
         }
      default:
         return state;
   }
}

module.exports = rootReducer;