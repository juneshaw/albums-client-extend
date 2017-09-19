import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAlbum } from '../actions/index';
import { bindActionCreators } from 'redux';

class AlbumList extends Component {
  renderList() {
    return this.props.albums.map((album) => {
      return (
        <li
          key={album.title}
          onClick={() => this.props.selectAlbum(album)}
          className="list-group-item">
          {album.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectAlbum: selectAlbum }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
