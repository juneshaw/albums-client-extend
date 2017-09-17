import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import Loading from './reducer_loading';

const rootReducer = combineReducers({
  loading: Loading,
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
