import React from 'react';
import {connect} from 'react-redux';
import './EventDetail.css';
import EventDetailComp from '../components/Event/EventDetailComp'
import {Route,Link} from 'react-router-dom'


class EventDetail extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.props = props;
    }
    
    componentWillMount() {
        
    }

    render() {
        const { classes } = this.props;

        return ( 
            <div>
                <h1>
                    <Link to="/event-list"> Event List </Link>
                </h1>
                
                <EventDetailComp { ...this.props} />
                
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
