import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  gameId: 'none'
};

//Actions

//Thunks

//Reducer
const reducer = (state = initialState, action) => {
    return state;
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// console.log('store is: ', store)
  
export default store;