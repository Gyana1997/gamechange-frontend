import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { InputField } from '../../basic/InputField';
import { Toast } from '../../basic/Toast';
import { Validate } from  '../../config';
import {bindActionCreators } from 'redux';
// import { LoginRequestFailure, LoginRequestSuccess, LoginRequest } from '../../actions/LoginAction';
import { FetchEventListRequest, FetchEventListRequestFailure, FetchEventListRequestSuccess } from '../../actions/EventListAction';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import EventCard from './EventCard';
// import { bindActionCreators } from 'redux';

class EventListComp extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.handleInitialize = this.handleInitialize.bind(this);
        this.redirectToDev = this.redirectToDev.bind(this);

    }

    submitForm() {
        //console.log("submitForm",this.props);
        this.props.EventDetailRequest(this.state.eventdetail);
        
    }

    componentWillMount() {
        this.handleInitialize()
    }

    handleInitialize() {
        this.props.FetchEventListRequest();
    }

    redirectToDev() {
        //console.log("redirect",this.props);
         this.props.history.push('/event-detail');
    }

    render() {

        return (  
            
            <div>
                {this.props.eventdetail && 
                    this.redirectToDev()
                }  
                <div>
                    {this.props.eventList && 
                       this.props.eventList.map((event, index) => (
                        <EventCard {...this.props} key={index} event={event} />
                      ))
                    }
                </div>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) { 
    // console.log("kk", state)
    if(state.eventListReducer.eventList) {
        // console.log("kk11", state)
        return {
            eventList: state.eventListReducer.eventList
        };   
    } else {
        return {
            "eventList": []
        }
    }
    
}

//determines what action available in a component
function mapDispatchToProps(dispatch) {

    return bindActionCreators({
       FetchEventListRequest, FetchEventListRequestFailure, FetchEventListRequestSuccess
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventListComp);