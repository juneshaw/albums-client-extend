import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {
  handleClick(link) {
    console.log('link: ', link)
    this.props.buyBook(link)
    // e.preventDefault()
    // purchaseAlbum(this.props.book.links["rel":"purchase.album")
  }

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
        <h1>{this.props.book.links[2].href}</h1>
        {this.props.book.links ? <p><a onClick={this.handleClick(this.props.book.links[2].href)}>Buy album</a></p> : ''}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}


// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
// to all of our reducers
  return bindActionCreators({ buyBook: buyBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
