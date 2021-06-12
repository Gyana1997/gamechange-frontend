import * as types from '../config/actionTypes';
import {push} from 'react-router-redux';
import { API_URL,User } from '../config'
import axios from 'axios';

export function LoginRequest(values) {
	
	return (dispatch) => {
		axios.get( 'https://dummyapi.io/data/api/post?limit=10', { headers: {
                "Content-Type": "application/json",
                "app-id":"60c30aea52dd087cb345b46c"}
        })
    	.then((response) => {
    		console.log("login response",response.data)
			dispatch(LoginRequestSuccess(response.data));
		})
		.catch((error) => {
			dispatch(LoginRequestFailure(error));
		})
	}
	
}
export function LoginRequestFailure(error) {
	return {
		type: types.LOGIN_REQUEST_FAILURE,
		payload: error
	};
}
export function LoginRequestSuccess(value) {
	return {
		type:  types.LOGIN_REQUEST_SUCCESS,
		payload: value
	};
}