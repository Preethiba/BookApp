//state is not an appln state, only the state this reducer is responsible for
//never mutate the state instead use ...state
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
