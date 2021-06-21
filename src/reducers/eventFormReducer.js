import * as types from '../config/actionTypes';
import initialState from './initialState';

export default function eventFormReducer(state = initialState.eventdata, action) {
    switch(action.type) {
        // case types.LOGIN_REQUEST:
        //     return Object.assign({}, state, {
		// 		loading: true,
		// 		error: null
		// 	});
            //return state
        case types.EVENTFORM_REQUEST_SUCCESS:
            console.log("hau",action.payload)
            return Object.assign({}, state, {
                eventdata: action.payload,
                requesting: true,
                success: true,
				error: null
			});

        case types.EVENTFORM_REQUEST_FAILURE:
            // return Object.assign(
            //     {},
            //     state,
            //     {profile: ""}
            // );
            // return Object.assign({}, state, {
            //     profile: {
            //     }
            //   });
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