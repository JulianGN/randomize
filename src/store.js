import { createStore } from "@reduxjs/toolkit";

const initialState = {
    sortedNumbers: [],
    numbers: 1,
    limitNumber: 50,
    withZero: true,
    names: [],
    groups: [],
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'sortNumbers':
            return { ...state, sortedNumbers: action.payload }   
        case 'updateNumbers':
            return { ...state, numbers: action.payload }  
        case 'updateLimit':
            return { ...state, limitNumber: action.payload }  
        case 'updateZero':
            return { ...state, withZero: action.payload }
        case 'updateNames':   
            return { ...state, names: action.payload }     
        case 'updateGroups':   
            return { ...state, groups: action.payload } 
        default:
            return state;
    }
}

export const store = createStore(reducer);
