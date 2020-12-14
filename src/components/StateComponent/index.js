import React, { Component } from "react";

export default class Index extends Component {
  constructor(props) {
    super(props);
    // Define state 
    this.state = {
      name: "Ronaldo"
    }
  }

  handleClick = () => {
    console.log("You click the button");
    // this.state.name = "Messi";
    // this.setState({ name: "Messi" });
    this.setState((state, props) => {
      console.log(state, props);
      return { name: "Messi" }
    });
  }

  render() {
    return (
      <div>
        Name: {this.state.name}
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}
