import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// import rootReducer from '../redux/rootReducer';
import reducer from '../redux/spaceReducer';
const store = createStore(reducer,applyMiddleware(thunk))
export default store;