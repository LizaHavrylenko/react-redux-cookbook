import { createStore } from '../../../../.cache/typescript/2.9/node_modules/redux';
import cookbookApp from './actions/RecipesReducers';
import {loadState, saveState} from './localStorage';
import throttle from '../../../../.cache/typescript/2.9/node_modules/@types/lodash/throttle';

const configureStore = () =>{
const persistedState =  loadState();
const store = createStore(cookbookApp, persistedState);

store.subscribe(throttle(() =>{
    saveState(store.getState());
}, 1000));
   return store;
}

export default configureStore;