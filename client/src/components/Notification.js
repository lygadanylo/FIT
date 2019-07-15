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
    return (
      <section id="Notifications">
        <div className="notification-wrapper">
          {notification && notification.type === false ? (
            <div>
              <h1>{notification.message}</h1>
            </div>
          ) : null}
        </div>
      </section>
    );
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
