import React from 'react';
import {connect} from 'react-redux';
// import './EventPageForm.css';
import EventForm from '../components/Event/EventForm';




class EventPageForm extends React.Component {
    
    constructor(props, context) {
		super(props, context);
        this.props = props;
    }
    
    componentWillMount() {
        
    }

    render() {
        const { classes } = this.props;

        return ( 
                <EventForm onSubmit={this.submitHandler} { ...this.props} />
        );
    }
}

//accessing state from reducer 
function mapStateToProps(state, ownProps) {
	return {

	}
}

//determines what action available in a component
function mapDispatchToProps(dispatch) {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPageForm);
