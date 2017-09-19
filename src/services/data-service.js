// import request from 'superagent'
import client from './client';

const dataService = store => next => action => {
	next(action)
	switch (action.type) {
	  	case 'GET_BOOK_DATA':
	      client({method: 'GET',
	      headers: {"Accept": "application/json"},
	      path: 'http://localhost:8181/albums'}).then((response) => {
	  				next({
	  					type: 'GET_BOOK_DATA_RECEIVED',
	  					data: response
	  				})
	  			})
	  		break
			case 'BUY_BOOK':
	      client({method: 'GET',
	      headers: {"Accept": "application/json"},
	      path: action.payload}).then((response) => {
  				next({
  					type: 'BUY_BOOK_DATA',
  					data: response
  				})
  			})
	  		break
			case 'BOOK_SELECTED':
				var pathIndex = action.payload.links.findIndex((obj => obj.rel === 'self'));
				var path = action.payload.links[pathIndex].href;
				client({method: 'GET',
				headers: {"Accept": "application/json"},
				path: path}).then((response) => {
					next({
						type: 'BOOK_SELECTED_DATA',
						data: response
					})
				})
				break

  	default:
  		break
	}
};

export default dataService
