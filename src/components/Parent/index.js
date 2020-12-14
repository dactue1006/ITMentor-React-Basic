import React, { Component } from 'react';
import Child from "../Child";
import FunctionalComponent from "../FunctionalComponent";

class Parent extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>This is Parent Component</h1>
        <Child message="Message received from Parent"></Child>
        <FunctionalComponent message="This is message send to functional component"></FunctionalComponent>
        {this.props.children}
      </div>
    );
  }
}

export default Parent;