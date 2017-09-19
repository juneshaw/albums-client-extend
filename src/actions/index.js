export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

export function buyBook(book) {
  return {
    type: 'BUY_BOOK',
    payload: book
  };
}
