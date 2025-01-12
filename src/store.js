import { createStore, combineReducers } from 'redux';
import pageReducer from './redux/reducers/page';

const rootReducer = combineReducers({
    changePage: pageReducer,
  });
  
  const store = createStore(rootReducer);
  
  export default store;