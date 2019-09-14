import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunkMiddleware];
 
if (process.env.NODE_ENV === `development`)  middlewares.push(logger);

const initialState = {
  userId: '',
  gameId: 'none', 
  players: [],
  isPrivateGame: false,
  board: [0,0,0,0,0,0,0,0,0],
  gameOpen: true,
  gameOver: false
};

const RECIEVE_GAME = 'Receive Game';
const RECIEVE_MOVE = 'Receive Move';

//Actions
export const receiveGame = game => {
  console.log('receive game action called')
  return {
    type: RECIEVE_GAME, 
    data: game
  }
}

export const receiveMove = boardUpdate => {
  return {
    type: RECIEVE_MOVE,
    data: boardUpdate
  }
}


//Thunks

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_GAME:
      console.log('Receive Game Reducer Action Called', action);
      return {...state, ...action.data}
    case RECIEVE_MOVE:
      console.log('Receive Game Reducer Action Called', action);
      return {...state, board: action.data}
  }

  return state;
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
// const store = compose(applyMiddleware())(createStore)(reducer);

// console.log('store is: ', store)
  
export default store;