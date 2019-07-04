import React, {Component} from "react";
import {connect} from "react-redux";
import { PropTypes } from "prop-types";
import {getUser} from "../../action/action";

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render() {
        const {user} = this.props;
        console.log(user);
        return(
            <div>
                { user? (<div><h1>{user.name}</h1></div>):(<div>Sorry this page is empty</div>)
                
                }
            </div>
        );
    }
}

const mapStateToProps =state => {
    const {user} = state;
    return{
        user
    };
}

const mapDispatchToProps = {
    getUser
}

Profile.protoType = {
    getUser: PropTypes.func,
    user: PropTypes.object
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);