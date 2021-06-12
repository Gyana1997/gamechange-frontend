import * as types from '../config/actionTypes';
import {push} from 'react-router-redux';
import { API_URL,User } from '../config'
import axios from 'axios';

export function EventFormRequest(values) {
	
	return (dispatch) => {
		console.log("action data",values)
		axios.get( 'https://dummyapi.io/data/api/post?limit=10', { headers: {
                "Content-Type": "application/json",
                "app-id":"60c30aea52dd087cb345b46c"}
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