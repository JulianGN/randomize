import { createStore } from "@reduxjs/toolkit";

const initialState = {
    sortedNumbers: [],
    numbers: 0,
    limitNumber: 50,
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'sortNumbers':
            return { ...state, sortedNumbers: action.payload }   
        case 'updateNumbers':
            return { ...state, numbers: action.payload }  
        case 'updateLimit':
            return { ...state, limitNumber: action.payload }                                  
        default:
            return state;
    }
}

export const store = createStore(reducer);
