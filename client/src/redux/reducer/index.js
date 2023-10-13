const { GET_RAZAS, GET_TEMPERAMENTS, GET_BY_NAME, ORDER, FILTER_T, FILTER_O, RESET } = require("../actions");

let initialState = {
   allRazas: [],
   copyRazas: [],
   copyReset: [],
   allTemperaments: [],
   filters: { order: 'All', filterT: 'All', filterO: 'All' },
}

function rootReducer(state = initialState, action) {
   const { payload, type } = action
   switch (type) {
      case GET_RAZAS:
         return {
            ...state,
            allRazas: payload,
            copyRazas: payload,
            copyReset: payload,
         };
      case GET_TEMPERAMENTS:
         return {
            ...state,
            allTemperaments: payload,
         }
      case GET_BY_NAME:
         return {
            ...state,
            allRazas: payload,
         };
      case ORDER:
         let orderRazas = [...state.allRazas]
         let orderCopy = [...state.copyRazas]
         switch (payload) {
            case 'All':
               return {
                  ...state,
                  allRazas: state.copyReset,
                  filters: {
                     ...state.filters,
                     order: payload,
                  },
               }
            case 'Name Asc':
               orderRazas?.sort((a, b) => a.name.localeCompare(b.name))
               orderCopy?.sort((a, b) => a.name.localeCompare(b.name))
               break;
            case 'Name Des':
               orderRazas?.sort((a, b) => b.name.localeCompare(a.name))
               orderCopy?.sort((a, b) => b.name.localeCompare(a.name))
               break;
            case 'Weight Asc':
               orderRazas?.sort((a, b) => {
                  let pesoA;
                  let pesoB;

                  pesoA = a.weight?.split(' - ');
                  pesoA = pesoA.length > 1 ? pesoA[1] : pesoA[0]
                  pesoB = b.weight?.split(' - ')
                  pesoB = pesoB.length > 1 ? pesoB[1] : pesoB[0]

                  return parseInt(pesoA) - parseInt(pesoB)
               })

               orderCopy?.sort(((a, b) => {
                  let pesoA;
                  let pesoB;

                  pesoA = a.weight?.split(' - ');
                  pesoA = pesoA.length > 1 ? pesoA[1] : pesoA[0]
                  pesoB = b.weight?.split(' - ')
                  pesoB = pesoB.length > 1 ? pesoB[1] : pesoB[0]

                  return parseInt(pesoA[0]) - parseInt(pesoB[0])
               }))
               break;
            case "Weight Des":
               orderRazas?.sort(((a, b) => {
                  let pesoA;
                  let pesoB;

                  pesoA = a.weight?.split(' - ');
                  pesoA = pesoA.length > 1 ? pesoA[1] : pesoA[0]
                  pesoB = b.weight?.split(' - ')
                  pesoB = pesoB.length > 1 ? pesoB[1] : pesoB[0]

                  return parseInt(pesoB) - parseInt(pesoA)

               }))

               orderCopy?.sort(((a, b) => {
                  let pesoA;
                  let pesoB;

                  pesoA = a.weight?.split(' - ');
                  pesoA = pesoA.length > 1 ? pesoA[1] : pesoA[0]
                  pesoB = b.weight?.split(' - ')
                  pesoB = pesoB.length > 1 ? pesoB[1] : pesoB[0]

                  return parseInt(pesoB) - parseInt(pesoA)

               }))
               break;

            default:
               break;
         }
         return {
            ...state,
            allRazas: orderRazas,
            copyRazas: orderCopy,
            filters: {
               ...state.filters,
               order: payload ? payload : 'Name Asc',
            },
         }
      case FILTER_T:
         if (payload === 'All') {
            return {
               ...state,
               allRazas: state.copyReset,
               filters: {
                  ...state.filters,
                  filterT: payload,
               },
            }
         } else {
            let filter = state.copyReset.filter((dog) => dog?.temperament?.includes(payload))

            return {
               ...state,
               allRazas: filter,
               filters: {
                  ...state.filters,
                  filterT: payload,
                  filterO: 'All',
                  order: 'All'
               },
            }
         }
      case FILTER_O:
         if (payload === 'All') {
            return {
               ...state,
               allRazas: state.copyReset,
               filters: {
                  ...state.filters,
                  filterO: payload,
               },
            }
         } else {
            let filter = []
            if (payload === 'API') filter = state.copyRazas.filter((dog) => typeof (dog?.id) === 'number')
            else if (payload === 'DB') filter = state.copyRazas.filter((dog) => typeof (dog?.id) === 'string')

            return {
               ...state,
               allRazas: filter,
               filters: {
                  ...state.filters,
                  filterO: payload,
                  filterT: 'All',
                  order: 'All'
               },
            }
         }
      case RESET:
         return {
            ...state,
            allRazas: [...state.copyReset],
            filters: {
               ...state.filters,
               order: 'All',
               filterT: 'All',
               filterO: 'All'
            }
         }
      default:
         return state;
   }
}

module.exports = rootReducer;