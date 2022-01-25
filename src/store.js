import { createStore } from "@reduxjs/toolkit";

const initialState = {
    sortedNumbers: [],
    limitNumber: 50,
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'sortNumbers':
            return { ...state, sortedNumbers: action.payload }                     
        default:
            return state;
    }
}

export const store = createStore(reducer);
