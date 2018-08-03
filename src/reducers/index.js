export default function ingredientReducer() {
  switch(action.type) {
   case 'ADD_INGREDIENT':
     return [...state, action.payload];
   case 'REMOVE_INGREDIENT':
     return state.filter((item) => item !== action.payload);
   default:
     return state;
 }

}
