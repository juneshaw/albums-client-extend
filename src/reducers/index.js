import { combineReducers } from 'redux';
import AlbumsReducer from './reducer_albums';
import ActiveAlbum from './reducer_active_album';
import Loading from './reducer_loading';

const rootReducer = combineReducers({
  loading: Loading,
  albums: AlbumsReducer,
  activeAlbum: ActiveAlbum
});

export default rootReducer;
