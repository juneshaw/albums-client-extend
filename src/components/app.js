import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import client from './client';

export default class App extends Component {
  // constructor(props) {
	// 	super(props);
	// 	this.state = {books: []};
	// }

	componentDidMount() {
		client({method: 'GET',
    headers: {"Accept": "application/json"},
    path: 'http://localhost:8181/albums'}).then(response => {
      console.log('response: ', response);
			// this.setState({employees: response.entity._embedded.employees});
		});
	}

  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
