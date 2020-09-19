import * as types from './../constants/ActionTypes'

let initialState = [];

function findIndex(products, id) {
    let result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index
        }
    });
    return result;
}

let products = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case types.LIST_ALL:
            state = action.products;
            return state;
        case types.DELETE_PRODUCT:
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        case types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case types.UPDATE_PRODUCT:
            index = findIndex(state, action.product.id);
            state[index] = action.product;
            return [...state];
        default:
            return state
    }
};

export default products;
