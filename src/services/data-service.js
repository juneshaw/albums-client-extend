// import request from 'superagent'
import client from './client';

const dataService = store => next => action => {
	next(action)
	switch (action.type) {
	  	case 'GET_BOOK_DATA':
      client({method: 'GET',
      headers: {"Accept": "application/json"},
      path: 'http://localhost:8181/albums'}).then((response) => {
					console.log(response);
  				// const data = JSON.parse(response.entity)
  				next({
  					type: 'GET_BOOK_DATA_RECEIVED',
  					data: response
  				})
  			})
  		break
  	default:
  		break
	}
};

export default dataService
