import React, { Component } from "react";
import Button from '@mui/material/Button';
import { render } from "react-dom";
import SignUp from "./SignUpContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showSignUp: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showSignUp":
        this.setState({ showSignUp: !this.state.showSignUp });
        break;
      default:
    }
  }

  render() {
    const { showSignUp } = this.state;
    return (
      <div>
        <div>
          <Button onClick={() => this.hideComponent("showSignUp")}>
            Sign Up
          </Button>
        </div>
        {showSignUp && <SignUp />}
      </div>
    );
  }
}

export default App;