import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { InputField } from '../../basic/InputField';
// import { Toast } from '../../basic/Toast';
// import { Validate } from  '../../config';
import {bindActionCreators } from 'redux';
import {EventDetailRequest, EventDetailRequestFailure, EventDetailRequestSuccess} from '../../actions/EventDetailAction';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
// import { bindActionCreators } from 'redux';

class EventDetailComp extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        // this.DeleteButtonRequest = this.DeleteButtonRequest.bind(this);
        this.deleteButton = this.deleteButton.bind(this);
    }
    componentWillMount() {
        let selectedCardId = localStorage.getItem("selectedCard")
        this.props.EventDetailRequest(selectedCardId)
    }

    componentDidMount() {
        // console.log("curly", this.props)
    }

    deleteButton(){
        // console.log("eventss", this.props.event)

        // this.props.DeleteButtonRequest(this.props.event);
    }

    

    render() {



        const { handleSubmit, submitting, error } = this.props;

        return (
            
                <div className="event-card">
                    {this.props.eventDetail &&
                        <div>
                            <div className="row">
                                <div className="col-md-6 eventLabel">Event Name</div>
                                <div className="col-md-6">{this.props.eventDetail.name}</div> 
                            </div>
                            <div className="row">
                                <div className="col-md-6 eventLabel">Number of People</div>
                                <div className="col-md-6">{this.props.eventDetail.participants}</div> 
                            </div>
                        </div>
                    }
                </div>
        );
    }
}


function mapStateToProps(state, ownProps) { 
    
   console.log("detail state return data", state)

   if(state.eventDetailReducer.eventDetail) {
        return {
            eventDetail: state.eventDetailReducer.eventDetail
        }
   } else {
        return {}
   }
   
    
}

//determines what action available in a component
function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        EventDetailRequest, EventDetailRequestFailure, EventDetailRequestSuccess
        // DeleteButtonRequest, DeleteButtonRequestFailure, DeleteButtonRequestSuccess
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailComp);