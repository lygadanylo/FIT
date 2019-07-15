import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../action/action";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { notification } = this.props;
    console.log(notification ? notification.type : null);
    return <section id="Notifications" />;
  }
}

const mapStateToProps = state => {
  const { notification } = state;
  return {
    notification
  };
};

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
