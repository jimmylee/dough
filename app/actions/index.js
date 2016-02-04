'use-strict';

import 'whatwg-fetch';

export function addToList(id) {
    return {
        id: id,
        type: 'ADD_TO_YOUR_LIST'
    };
}

export function removeFromList(id) {
    return {
        id: id,
        type: 'REMOVE_FROM_YOUR_LIST'
    };
}

export function addGifCollection(collection) {
    return {
        collection: collection,
        type: 'ADD_GIF_COLLECTION'
    };
}

export function networkFailure(data) {
    return {
        failure: data,
        type: 'NETWORK_FAILURE'
    };
}

export function removeNetworkFailure() {
    return {
        type: 'REMOVE_NETWORK_FAILURE'
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
        }).then((body) => {
            dispatch(addGifCollection(body.data));
        }).catch((exception) => {
            dispatch(networkFailure(String(exception)));
        });
    };
}
