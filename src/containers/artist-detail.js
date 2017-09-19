import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArtistDetail extends Component {

  render() {
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.album.title}</div>
        <div>Artist: {this.props.album.artist.name}</div>
        <div>Stock Level: {this.props.album.stockLevel}</div>
        {this.props.album.links.findIndex((obj => obj.rel === 'album.purchase')) >= 0 ?
          <p><a onClick={() => this.props.buyAlbum(this.props.album.links[this.props.album.links.findIndex((obj => obj.rel === 'album.purchase'))]['href'])}>Buy album</a></p> :
           ''}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    album: state.activeAlbum
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ buyAlbum: buyAlbum }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
