export default function(state = [], action) {
  switch (action.type) {
    case 'GET_ALBUM_DATA_RECEIVED':
  		return action.data.entity
    default:
      return state
  }
}
