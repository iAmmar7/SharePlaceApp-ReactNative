import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import placesReducer from './reducers/places';
import uiReducer from './reducers/ui';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
  places: placesReducer,
  ui: uiReducer,
  auth: authReducer,
});

// Setting up redux dev tool
let composeEnhancers = compose;

if (__DEV__) {
  // Check if we are in development mode
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// const configureStore = () => {
//   return createStore(rootReducer);
// };
const configureStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
