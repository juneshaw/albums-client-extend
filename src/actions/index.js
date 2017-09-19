export function selectAlbum(album) {
  // selectAlbum is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'ALBUM_SELECTED',
    payload: album
  };
}

export function buyAlbum(album) {
  return {
    type: 'BUY_ALBUM',
    payload: album
  };
}
