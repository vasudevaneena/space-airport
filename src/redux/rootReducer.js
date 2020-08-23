import {combineReducers} from 'redux';
import spaceReducer from './spaceReducer';
const rootReducer = combineReducers({
    data: spaceReducer
})

export default rootReducer;