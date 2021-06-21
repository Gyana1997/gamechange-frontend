import * as types from '../config/actionTypes';
import {push} from 'react-router-redux';
import { API_URL,User } from '../config'
import axios from 'axios';

export function LoginRequest(values) {
	
	return (dispatch) => {
		axios.post('http://localhost:9001/v1/user/signin', {
		    "email": values.email,
		    "password": values.password
		})
    	.then((response) => {
    		console.log("login response",response.data)
    		User.setAuthorization(response.data.data.token)
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