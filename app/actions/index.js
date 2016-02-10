'use-strict';

import 'whatwg-fetch';

export function likePostById(id) {
  return {
    id: id,
    type: 'LIKE_POST_BY_ID'
  };
}

export function addGifs(collection) {
  return {
    collection: collection,
    type: 'ADD_GIFS'
  };
}

export function fetchData() {
  const RESOURCE = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

  return dispatch => {
    fetch(RESOURCE, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      dispatch(addGifs(jsonResponse.data));
    });
  };
}
