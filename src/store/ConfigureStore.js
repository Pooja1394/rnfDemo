/**
 * Store
 */
import { createStore } from 'redux';
import reducer from '../reducer/RootReducer';

var store = createStore(reducer);
export default store;