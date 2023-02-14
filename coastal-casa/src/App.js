import React, { Component } from "react";
import { render } from "react-dom";
import Demo1 from "./SignUpContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDemo1: false,
      showHideDemo2: false,
      showHideDemo3: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;
      default:
    }
  }

  render() {
    const { showHideDemo1 } = this.state;
    return (
      <div>
        {showHideDemo1 && <Demo1 />}
        <hr />
        <div>
          <button onClick={() => this.hideComponent("showHideDemo1")}>
            Click to hide Demo1 component
          </button>
        </div>
      </div>
    );
  }
}

export default App;