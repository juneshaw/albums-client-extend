import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  handleClick(link) {
    debugger
    console.log('link: ', link)
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
        <h1>{this.props.book.links[2].rel}</h1>
        {this.props.book.links ? <p><a onClick={this.handleClick(this.props.book.links.findIndex((obj => obj.rel === 'album.purchase')))}>Buy album</a></p> : ''}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
