import {combineReducers, createStore} from "redux"
import AppReducer from './store/reducer'

// reducer 入口
const reducer = combineReducers({
    AppValue: AppReducer
})

const initState = {
    AppValue: {
        value: 9,
        value1: 1,
        value2: 0
    }
}

// 值传递
export default createStore(reducer, initState)

