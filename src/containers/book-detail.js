import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {

  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Artist: {this.props.book.artist.name}</div>
        <div>Stock Level: {this.props.book.stockLevel}</div>
        {this.props.book.links.findIndex((obj => obj.rel === 'album.purchase')) >= 0 ?
          <p><a onClick={() => this.props.buyBook(this.props.book.links[this.props.book.links.findIndex((obj => obj.rel === 'album.purchase'))]['href'])}>Buy album</a></p> :
           ''}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
// to all of our reducers
  return bindActionCreators({ buyBook: buyBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
