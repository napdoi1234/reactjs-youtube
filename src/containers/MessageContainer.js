import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import  Message from './../components/message';


class MessageContainer extends Component{
    render() {
        var {mess}=this.props;
        return (
            <Message mess={mess}/>
        );
    }
}
MessageContainer.propTypes={
    mess: PropTypes.string.isRequired
}
const mapStateToProps=state=>{
    return{
        mess:state.message
    }
}



export default connect(mapStateToProps,null)(MessageContainer);
