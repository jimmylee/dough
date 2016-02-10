'use-strict';

const initialState = {
    failure: null,
    hasData: false,
    collection: [],
    selection: []
}

export function addToSelectionById(id, state) {
    var collection = [...state.collection];
    var selection = [...state.selection];
    let targetItem = null;

    collection = collection.filter((item) => {
        if (item.id === id) {
            targetItem = item;

            return false;
        }

        return true;
    });

    selection.unshift(targetItem);

    return {...state, collection, selection};
}

export function removeFromSelectionById(id, state) {
    var collection = [...state.collection];
    var selection = [...state.selection];
    let targetItem = null;

    selection = selection.filter((item) => {
        if (item.id === id) {
            targetItem = item;
            return false;
        }

        return true;
    });

    collection.unshift(targetItem);

    return {...state, collection, selection};
}

export function addDataToCollection(collection, state) {
    let hash = {};

    const joinedCollection = state.collection.concat(collection).filter((item) => {
        return hash.hasOwnProperty(item.id) ? false : (hash[item.id] = true);
    });

    return {...state, hasData: true, collection: joinedCollection};
}

export function showErrorMessage(message, state) {
    return {...state, failure: message}
}

export function removeErrorMessage(state) {
    return {...state, failure: null}
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
