import * as ActionTypes from './actionTypes'

const reducer = (state = {}, action) => {
    switch(action.type){
        case ActionTypes.ADDVALUE: {
            return {...state, value: action.data}
        }
        case ActionTypes.SUBVALUE: {
            return {...state, value1: action.data}
        }
        case ActionTypes.ADDVALUE2: {
            return {...state, value2: action.data}
        }
        default: {
            return state;
        }
    }
}

export default reducer;