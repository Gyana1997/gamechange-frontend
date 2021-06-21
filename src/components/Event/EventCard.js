import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { InputField } from '../../basic/InputField';
import { Toast } from '../../basic/Toast';
import { Validate } from  '../../config';
import {bindActionCreators } from 'redux';
// import { LoginRequestFailure, LoginRequestSuccess, LoginRequest } from '../../actions/LoginAction';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { useHistory } from 'react-router-dom';
// import { bindActionCreators } from 'redux';

class EventCard extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.redirectToDev = this.redirectToDev.bind(this);
        this.handleInitialize = this.handleInitialize.bind(this);

    }
    componentWillMount() {
        this.handleInitialize();
    }
     handleInitialize() {
        const eventdetail = {

        };

     }

    componentDidMount() {
        // console.log("curly", this.props)
    }

    // deleteButton(){
    //     console.log("eventss", this.props.event)
    //     // this.props.DeleteButtonRequest(this.props.event);
    // }
    redirectToDev() {
        console.log("redirect",this);
        localStorage.setItem("selectedCard", this.props.event._id);

        this.props.history.push('/event-detail');
         // useHistory.push('/event-detail');
    }

    

    render() {

        return (
            <div className="event-card">
                <div className="row">
                    <div className="col-md-6 eventLabel">Event Name</div>
                    <div className="col-md-6">{this.props.event.name}</div> 
                </div>
                <div className="row">
                    <div className="col-md-6 eventLabel">Number of People</div>
                    <div className="col-md-6">{this.props.event.participants}</div> 
                </div>
                <div className="row">
                    <button className="btn btn-lg submit-btn" type="submit" onClick={this.redirectToDev}>Detail btn</button>
                </div> 
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) { 

   console.log("this.props", ownProps)
   return {

   }
    
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        // DeleteButtonRequest, DeleteButtonRequestFailure, DeleteButtonRequestSuccess
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);