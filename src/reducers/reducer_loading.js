const loading = (state = false, action) => {
	switch (action.type) {
	case 'GET_ALBUM_DATA':
		return true
	case 'GET_ALBUM_DATA_RECEIVED':
		return false
	case 'GET_ALBUM_DATA_ERROR':
		return false
	default:
		return state
	}
}

export default loading
