import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import ActiveBook from './reducer_activebook';

const rootReducer = combineReducers({
  books: BookReducer,
  activebook: ActiveBook
});

export default rootReducer;
