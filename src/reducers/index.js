import {combineReducers} from 'redux';
//import profile from './profileReducer';
import { reducer as form  } from 'redux-form';
import user from './loginReducer';
import eventListReducer from './eventListReducer';
import eventFormReducer from './eventFormReducer';
import eventDetailReducer from './eventDetailReducer';


const rootReducer = combineReducers({
    user,
    form,
    eventListReducer,
    eventFormReducer,
    eventDetailReducer
});

export default rootReducer;