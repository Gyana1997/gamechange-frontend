import {combineReducers} from 'redux';
//import profile from './profileReducer';
import { reducer as form  } from 'redux-form';
import user from './loginReducer';


const rootReducer = combineReducers({
    user,
    form
});

export default rootReducer;