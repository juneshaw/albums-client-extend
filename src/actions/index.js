export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

export function buyBook(book) {
  console.log('book to buy', book)
  return {
    type: 'BUY_BOOK',
    payload: book
  };
}
