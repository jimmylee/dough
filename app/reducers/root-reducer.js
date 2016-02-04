'use-strict';

const initialState = {
    failure: null,
    hasData: false,
    collection: [],
    selection: []
}

export function addToSelectionById(id, state) {
    let targetItem = null;

    state.collection = state.collection.filter((item) => {
        if (item.id === id) {
            targetItem = item;

            return false;
        }

        return true;
    });

    state.selection.unshift(targetItem);

    return Object.assign({}, state);
}

export function removeFromSelectionById(id, state) {
    let targetItem = null;

    state.selection = state.selection.filter((item) => {
        if (item.id === id) {
            targetItem = item;
            return false;
        }

        return true;
    });

    state.collection.unshift(targetItem);

    return Object.assign({}, state);
}

export function addDataToCollection(collection, state) {
    let hash = {};

    const joinedCollection = state.collection.concat(collection).filter((item) => {
        return hash.hasOwnProperty(item.id) ? false : (hash[item.id] = true);
    });

    state.collection = joinedCollection;
    state.hasData = true;

    return Object.assign({}, state);
}

export function showErrorMessage(message, state) {
    state.failure = message;

    return Object.assign({}, state);
}

export function removeErrorMessage(state) {
    state.failure = null;

    return Object.assign({}, state);
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_YOUR_LIST':
            return addToSelectionById(action.id, state);
        case 'REMOVE_FROM_YOUR_LIST':
            return removeFromSelectionById(action.id, state);
        case 'ADD_GIF_COLLECTION':
            return addDataToCollection(action.collection, state);
        case 'NETWORK_FAILURE':
            return showErrorMessage(action.failure, state);
        case 'REMOVE_NETWORK_FAILURE':
            return removeErrorMessage(state);
        default:
            return state;
    }
}
