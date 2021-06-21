import * as types from '../config/actionTypes';
import initialState from './initialState';

export default function eventDetailReducer(state = initialState.eventDetail, action) {
    switch(action.type) {

        case types.EVENTDETAIL_REQUEST_SUCCESS:
            console.log("hau",action.payload)
            return Object.assign({}, state, {
                eventDetail: action.payload,
                requesting: true,
                success: true,
				error: null
			});

        case types.EVENTDETAIL_REQUEST_FAILURE:
            return Object.assign({}, state, {
               // profile: action.payload,
                requesting: false,
                error: true,
                msg: action.payload
			});
        default:   
            return state;
    }
}