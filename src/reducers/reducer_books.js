export default function(state = [], action) {
  switch (action.type) {
    case 'GET_BOOK_DATA_RECEIVED':
  		return action.data.entity
    default:
      return state
  }
}
