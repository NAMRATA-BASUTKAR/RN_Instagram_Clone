import { combineReducers } from "redux";
import userReducers from './user';
import appReducer from './app';

const rootReducer = combineReducers({
    userDetails: userReducers,
    appDetails: appReducer
});

export default rootReducer;