import {combineReducers} from 'redux';
import product from './product';
import carts from './carts';
import message from './message';

const appReducers=combineReducers({
    product,
    carts,
    message
})
export default appReducers;