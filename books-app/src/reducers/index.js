import { combineReducers } from 'redux';
import errorReducer from './ErrorReducer';
import authReducer from './AuthReducer';

const rootReducer = combineReducers({
    error: errorReducer,
    auth: authReducer
});

export default rootReducer;