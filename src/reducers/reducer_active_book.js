// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED_DATA': {
      return action.data.entity;
    }
    case 'BUY_BOOK_DATA': {
      return action.data.entity;
    }
    default:
      return state;
  }
}
