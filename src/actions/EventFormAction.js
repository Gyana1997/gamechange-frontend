import * as types from '../config/actionTypes';
import {push} from 'react-router-redux';
import { API_URL,User } from '../config'
import axios from 'axios';

export function EventFormRequest(values) {
	
	return (dispatch) => {

		let data = { 
                "participants":values.people,
                "name":values.eventname,
                "details":'hfvjgbkhb',
                "address":'ggkb',
                "date": values.date
            
        }
		console.log("action data",data)
		axios.post( 'http://localhost:9001/v1/event/add', data, { headers:{
				'Content-Type': 'application/json',
				"Authorization": User.getAuthorization()
			}
		})
    	.then((response) => {
    		console.log("event response",response.data)
			dispatch(EventFormRequestSuccess(response.data));
		})
		.catch((error) => {
			dispatch(EventFormRequestFailure(error));
		})
	}
	
}
export function EventFormRequestFailure(error) {
	return {
		type: types.EVENTFORM_REQUEST_FAILURE,
		payload: error
	};
}
export function EventFormRequestSuccess(value) {
	return {
		type:  types.EVENTFORM_REQUEST_SUCCESS,
		payload: value
	};
}