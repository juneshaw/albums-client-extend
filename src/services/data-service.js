// import request from 'superagent'
import client from './client';

const dataService = store => next => action => {
	next(action)
	switch (action.type) {
	  	case 'GET_ALBUM_DATA':
	      client({method: 'GET',
	      headers: {"Accept": "application/json"},
	      path: 'http://localhost:8181/albums'}).then((response) => {
					console.log('ALL of album data: ', response);
  				next({
  					type: 'GET_ALBUM_DATA_RECEIVED',
  					data: response
  				})
  			})
	  		break
			case 'BUY_ALBUM':
	      client({method: 'GET',
	      headers: {"Accept": "application/json"},
	      path: action.payload}).then((response) => {
					console.log('BOUGHT album data: ', response);
  				next({
  					type: 'BUY_ALBUM_DATA',
  					data: response
  				})
  			})
	  		break
			case 'ALBUM_SELECTED':
				var pathIndex = action.payload.links.findIndex((obj => obj.rel === 'self'));
				var path = action.payload.links[pathIndex].href;
				client({method: 'GET',
				headers: {"Accept": "application/json"},
				path: path}).then((response) => {
					console.log('SELECTED album data: ', response);
					next({
						type: 'ALBUM_SELECTED_DATA',
						data: response
					})
				})
				break

  	default:
  		break
	}
};

export default dataService
