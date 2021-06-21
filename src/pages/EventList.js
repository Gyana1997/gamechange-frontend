import React from 'react';
import {connect} from 'react-redux';
import './EventList.css';
import EventListComp from '../components/Event/EventListComp'
import {Route,Link} from 'react-router-dom'


class EventList extends React.Component {
    
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
                    <Link to="/event-entry"> event-entry </Link>
                </h1>
                
                <EventListComp { ...this.props} />
                
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {

    }
}

//determines what action available in a component
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
