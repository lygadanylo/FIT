import React, {Component} from "react";
import {connect} from "react-redux";
import { PropTypes } from "prop-types";
import {getUser} from "../../action/action";

class Profile extends Component {
    constructor(props){
    super(props);
        this.state={};
    }
    componentDidMount() {
        const {user} = this.props;
        console.log(user);
        if(!user){
            const {getUser} = this.props;
            getUser();
        }
    }
    render() {
        const {user} = this.props;
        return(
            <div className="profile-wrapper">
                { user ? (
                    <div className="user-info">
                        <h1>Name: {user.name}</h1>
                        <h1>Last Name: {user.lastName}</h1>
                        <h1>Email: {user.email}</h1>
                    </div>
                )
                :(null)
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