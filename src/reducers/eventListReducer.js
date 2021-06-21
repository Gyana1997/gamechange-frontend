import * as types from '../config/actionTypes';
import initialState from './initialState';

export default function eventListReducer(state = initialState.eventList, action) {

    switch(action.type) {

        case types.FETCH_EVENTLIST_REQUEST_SUCCESS:
            console.log("listRe", action.payload)
            return Object.assign({}, state, {
                eventList: action.payload,
                requesting: true,
                success: true,
                error: null
            });


        case types.FETCH_EVENTLIST_REQUEST_FAILURE:

            return Object.assign({}, state, {
                requesting: false,
                error: true,
                msg: action.payload
            });

         case types.DELETEBTN_REQUEST_SUCCESS:
           
            return Object.assign({}, state, {
                eventList: action.payload,
                requesting: true,
                success: true,
                error: null
            });


        case types.DELETEBTN_REQUEST_FAILURE:

            return Object.assign({}, state, {
                requesting: false,
                error: true,
                msg: action.payload
            });

        default:   
            return state;
    }
}



