import { type } from '@testing-library/user-event/dist/type';
import * as ActionTypes from './actionTypes'

export const Add = (data) => {
    var addData = data + 1;
    return{
        type: ActionTypes.ADDVALUE,
        data: addData
    }
}

export const sub = (data) => {
    var subValue = data - 1;
    return {
        type: ActionTypes.SUBVALUE,
        data: subValue
    }
}
export const add2 = (data) => {
    var addvalue2 = data + 2;
    return{
        type: ActionTypes.ADDVALUE2,
        data: addvalue2
    }
}

