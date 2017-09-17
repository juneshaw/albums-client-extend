export default function(state = [], action) {
  debugger
  console.log('in the reducer', action.data);
  switch (action.type) {
    case 'GET_BOOK_DATA_RECEIVED':
  		return action.data.entity
    default:
      return state
  }

  // return [
  //   { title: 'Javascript: The Good Parts', artist: 'junebug', stockLevel: 10 },
  //   { title: 'Harry Potter', artist: 'ladybug', stockLevel: 5},
  //   { title: 'The Dark Tower', artist: 'rae', stockLevel: 2 },
  //   { title: 'Eloquent Ruby', artist: 'louise', stockLevel: 3 }
  // ];
}
