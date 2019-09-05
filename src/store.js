import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunkMiddleware];
 
if (process.env.NODE_ENV === `development`)  middlewares.push(logger);
 


const initialState = {
  gameId: 'none'
};

const RECIEVE_GAME = 'Receive Game';

//Actions
export const receiveGame = (game) => {
  console.log('receive game action called')
  return {
    type: RECIEVE_GAME, 
    data: game
  }
}

//Thunks

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_GAME:
      console.log('Receive Game Reducer Action Called');
      return {...state, gameId: action.gameId}
      break;
  }

  return state;
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
// const store = compose(applyMiddleware())(createStore)(reducer);

// console.log('store is: ', store)
  
export default store;