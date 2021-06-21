import * as types from '../config/actionTypes';
import {push} from 'react-router-redux';
import { API_URL,User } from '../config'
import axios from 'axios';
// import { EventDb } from '../config';

export function EventDetailRequest(values) {
	
	return (dispatch) => {
		

		axios.get( 'http://localhost:9001/v1/event/' + values,  { headers:{
				'Content-Type': 'application/json',
				"Authorization": User.getAuthorization()
			}
		})
    	.then((response) => {
    		console.log("data detail asuchi", response)
			dispatch(EventDetailRequestSuccess(response.data.data));
		})
		.catch((error) => {
			dispatch(EventDetailRequestFailure(error));
		})
	}
		// console.log("fulia", evts)
}
export function EventDetailRequestFailure(error) {
	return {
		type: types.EVENTDETAIL_REQUEST_FAILURE,
		payload: error
	};
}
export function EventDetailRequestSuccess(value) {
	return {
		type:  types.EVENTDETAIL_REQUEST_SUCCESS,
		payload: value
	};
}


// export function DeleteButtonRequest(data) {
	
// 	return (dispatch) => {
		
// 	}
	
// }
// export function DeleteButtonRequestFailure(error) {
// 	return {
// 		type: types.DELETEBTN_REQUEST_FAILURE,
// 		payload: error
// 	};
// }
// export function DeleteButtonRequestSuccess(value) {
// 	return {
// 		type:  types.DELETEBTN_REQUEST_SUCCESS,
// 		payload: value
// 	};
// }

