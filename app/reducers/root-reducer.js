const initialState = {
  likes: {},
  gifs: []
}

export function addLikeById(id, state) {
  const { likes } = state;
  likes[id] = likes[id] ? likes[id] + 1 : 1;

  return {
    ...state,
    likes
  };
}

export function addGifs(collection, state) {
  const gifs = [];
  collection.forEach((gif) => {
    gifs.push(gif);
  });
  return {
    ...state,
    gifs
  };
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LIKE_POST_BY_ID':
      return addLikeById(action.id, state);
    case 'ADD_GIFS':
      return addGifs(action.collection, state);
    default:
      return state;
  }
}
