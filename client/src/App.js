import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "", fetchUser: "" };
  }

  handelField = value => {
    this.setState({ user: value.target.value });
  };

  saveField = () => {
    const { user } = this.state;
    axios({
      method: "POST",
      url: "http://localhost:3012/create",
      data: { name: user }
    })
      .then(response => {
        this.setState({ user: " " });
      })
      .catch(error => console.log(error));
  };

  fetchUser = () => {
    axios({
      method: "GET",
      url: "/user"
    })
      .then(response => {
        console.log(response.data);
        this.setState({ fetchUser: response.data });
      })
      .catch(error => console.log(error));
  };
  render() {
    const { fetchUser, user } = this.state;
    console.log(fetchUser);
    return (
      <section>
        <div className="app-wrapper">
          <input
            type="text"
            value={user}
            onChange={this.handelField}
            placeholder="Name"
          />
          <button onClick={this.saveField}>Save</button>
          <button onClick={this.fetchUser}>Show</button>
          {fetchUser ? <div>{fetchUser.name}</div> : <div>Empty</div>}
        </div>
      </section>
    );
  }
}

export default App;
