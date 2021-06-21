import * as types from '../config/actionTypes';
import {push} from 'react-router-redux';
import { API_URL,User } from '../config'
import axios from 'axios';
// import { EventDb } from '../config';

export function FetchEventListRequest(values) {
	
	return (dispatch) => {
		

		axios.get( 'http://localhost:9001/v1/event/list',  { headers:{
				'Content-Type': 'application/json',
				"Authorization": User.getAuthorization()
			}
		})
    	.then((response) => {
    		console.log("data asuchi", response.data.data)
			dispatch(FetchEventListRequestSuccess(response.data.data));
		})
		.catch((error) => {
			dispatch(FetchEventListRequestFailure(error));
		})
	}
		// console.log("fulia", evts)
}
export function FetchEventListRequestFailure(error) {
	return {
		type: types.FETCH_EVENTLIST_REQUEST_FAILURE,
		payload: error
	};
}
export function FetchEventListRequestSuccess(value) {
	return {
		type:  types.FETCH_EVENTLIST_REQUEST_SUCCESS,
		payload: value
	};
}


export function DeleteButtonRequest(data) {
	
	return (dispatch) => {
		
	}
	
}
export function DeleteButtonRequestFailure(error) {
	return {
		type: types.DELETEBTN_REQUEST_FAILURE,
		payload: error
	};
}
export function DeleteButtonRequestSuccess(value) {
	return {
		type:  types.DELETEBTN_REQUEST_SUCCESS,
		payload: value
	};
}

export function DetailButtonRequest(data) {

	return(dispatch) => {

	}
}

export function DetailButtonRequestFailure(error) {
	return {
		type: types.DETAILBTN_REQUEST_FAILURE,
		payload: error
	}
}

export function DetailButtonRequestSuccess(value) {
	return {
		type: types.DETAILBTN_REQUEST_SUCCESS,
		payload: value
	}
}