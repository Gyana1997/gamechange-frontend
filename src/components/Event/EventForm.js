import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { InputField } from '../../basic/InputField';
import { Checkbox } from '../../basic/Checkbox';
import { Toast } from '../../basic/Toast';
import {bindActionCreators } from 'redux';
import { EventFormRequestFailure, EventFormRequestSuccess, EventFormRequest } from '../../actions/EventFormAction';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { Validate } from  '../../config';
import style from './EventForm.css'
import CanvasDraw from "react-canvas-draw";

// import { bindActionCreators } from 'redux';

class EventForm extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {};
        this.handleInitialize = this.handleInitialize.bind(this);
        this.onChange = this.onChange.bind(this);
        this.redirectToDev = this.redirectToDev.bind(this);
    }
    componentWillMount() {
        //console.log("this.props",this.props);
        this.handleInitialize();
    }
    handleInitialize() {
        const eventdata = {
            "eventname": "",
            "date": "",
            "people": "",
            "card": ""
        };
        this.setState({
            eventdata
        })
        // console.log("this.state",this.state);
    }
    onChange(event) {
        // console.log("state",this.state);
        // console.log("event",event.target.name);
        let evemName = event.target.name;
        let eventdata = this.state.eventdata;
        console.log('eventdata' , eventdata)
        if( evemName == "eventname" ) {
            eventdata[evemName] = event.target.value;
        }
        if ( evemName == "date" ) {
            eventdata[evemName] = event.target.value;
        }
        if ( evemName == "people" ) {
            eventdata[evemName] = event.target.value;
        }
        if ( evemName == "card" ) {
            eventdata[evemName] = event.target.value;
        }

        console.log("eventdata",eventdata);
        this.setState({
            eventdata
        })
    }
    submitForm() {
        //console.log("submitForm",this.props);
        this.props.EventFormRequest(this.state.eventdata);
        
    }
    redirectToDev() {
        // console.log("redirect",this.props);
         this.props.history.push('/event-list');
    }
    render() {
        const { handleSubmit, submitting, error } = this.props;

        return (
            <div>
            
            {this.props.eventdata && 
                this.redirectToDev()
            }

            <div className="formcard">
                <div className='container'>
                        {this.props.eventdata && 
                           <Toast 
                               text="Your event got added successfully"
                               className = "show"
                           />
                        }
                    <div className="row">
                        <div className="col-md-4 leftcard">
                            <div className="row leftheader">
                                Enter details of your dream event !!    
                            </div>

                            <div className="row leftbody">
                                Enter the details of event
                            </div>
                        </div>  
                        <div className="col-md-8 rightcard">
                            <div className="row rightheader">
                                Add details of the event 
                            </div>

                                <div className="row formSection">
                                    
                                        <form onSubmit={handleSubmit(this.submitForm.bind(this))} className="eventForm" >
                                            <div className="container">
                                                
                                                <div className="row formrow">
                                                    <div className="col-md-6">
                                                        <label className="labeltext">Enter Event Name</label>
                                                        <Field 
                                                            type="text"
                                                            className = "form-control event1" 
                                                            component = { InputField }
                                                            name = "eventname"
                                                            id = "eventname"
                                                            label = "Enter Event Name" 
                                                            onChange = { this.onChange }
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                            <label className="labeltext">Date of event</label>
                                                            <Field 
                                                                type="date"
                                                                className = "form-control event1" 
                                                                component = { InputField }
                                                                name = "date"
                                                                id = "date"
                                                                label = "" 
                                                                onChange = { this.onChange }
                                                            />
                                                    </div>
                                                </div>
                                                <div className="row formrow">
                                                        <div className="col-md-6">
                                                        
                                                            <label className="labeltext">Number of participant</label>
                                                            <Field 
                                                                type="text"
                                                                className = "form-control event1" 
                                                                component = { InputField }
                                                                name = "people"
                                                                id = "people"
                                                                label = "Number of participant" 
                                                                onChange = { this.onChange }
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="labeltext">Upload Your Event Card</label>
                                                            <Field 
                                                                type="file"
                                                                className = "form-control event1" 
                                                                component = { InputField }
                                                                name = "card"
                                                                id = "card"
                                                                label = "Upload Your Event Card" 
                                                                onChange = { this.onChange }
                                                            />
                                                        </div>
                                                 </div>

                                                <div className="row formrow">

                                                <label className="checkboxlabel">Select Your Party Type :-</label>

                                                    <div className="col-md-4">
                                                        <Field     
                                                            className = "form-check-input"                                                                                                                                                                                                                                                                                                                                                                                                      
                                                            component = { Checkbox }
                                                            name = "wedding" 
                                                            label="wedding"        
                                                            id = "checkbox"                                                                                                                                                                                                                                                                                                                                                                                
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <Field     
                                                            className = "form-check-input"                                                                                                                                                                                                                                                                                                                                                                                                      
                                                            component = { Checkbox }
                                                            name = "party" 
                                                            label="Party"        
                                                            id = "checkbox"                                                                                                                                                                                                                                                                                                                                                                                
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <Field     
                                                            className = "form-check-input"                                                                                                                                                                                                                                                                                                                                                                                                      
                                                            component = { Checkbox }
                                                            name = "birthday" 
                                                            label="Birthday"        
                                                            id = "checkbox"                                                                                                                                                                                                                                                                                                                                                                                
                                                        />
                                                    </div>
                                                    
                                                </div>
                                                <div className="row checkboxrow">
                                                    <div className="col-md-4">
                                                        <Field     
                                                            className = "form-check-input"                                                                                                                                                                                                                                                                                                                                                                                                      
                                                            component = { Checkbox }
                                                            name = "anniversary" 
                                                            label="Anniversary"        
                                                            id = "checkbox"                                                                                                                                                                                                                                                                                                                                                                                
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <Field     
                                                            className = "form-check-input"                                                                                                                                                                                                                                                                                                                                                                                                      
                                                            component = { Checkbox }
                                                            name = "promotion" 
                                                            label="Promotion"        
                                                            id = "checkbox"                                                                                                                                                                                                                                                                                                                                                                                
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <Field     
                                                            className = "form-check-input"                                                                                                                                                                                                                                                                                                                                                                                                      
                                                            component = { Checkbox }
                                                            name = "puja" 
                                                            label="Puja"        
                                                            id = "checkbox"                                                                                                                                                                                                                                                                                                                                                                                
                                                        />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-6">

                                                    <label className="canvasheader"> Canvas Draw</label> 
                                                    <CanvasDraw
                                                      ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                                                      brushColor={this.state.color}
                                                      brushRadius={this.state.brushRadius}
                                                      lazyRadius={this.state.lazyRadius}
                                                      canvasWidth={this.state.width}
                                                      canvasHeight={this.state.height}
                                                      className="canvaspage"
                                                    />

                                                    <button className="canvasbtn"
                                                        onClick={() => {
                                                          this.saveableCanvas.clear();
                                                    }}>
                                                    Clear Drawing
                                                  </button>
                                                </div>

                                                
                                            </div>


                                            <div className="row">
                                                <div className="col-md-9">
                                                </div>
                                                <div className="col-md-3 btnSection">
                                                    <button className="btn eventFormBtn" type="submit">Submit</button>
                                                </div>
                                                
                                            </div>
                                        </form>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
        }

        </div>
            
        );
    }
}

const validate = (values) => {
    const errors = {};

    if (!Validate.text(values.eventname)) {
      errors.eventname = 'Event name is required'
    }
     if (!Validate.text(values.date)) {
      errors.date = 'date is required'
    }
    return errors;

}

let eventForm =  reduxForm({
    form: 'eventForm', 
    validate
})(EventForm);


//accessing state from reducer 
function mapStateToProps(state, ownProps) {
    console.log("data kouthi", state) 

    if (state.eventFormReducer.eventdata) {
        return {
            eventdata: state.eventFormReducer.eventdata
        }
    } else {
        return {}
    }
}

//determines what action available in a component
function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        EventFormRequestFailure, EventFormRequestSuccess, EventFormRequest
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(eventForm);