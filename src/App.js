import React, { Component } from 'react';
import StyledComponent from "./components/StyledComponent";

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 className="title">
          Hello, ITMentor!
      </h1>
        <StyledComponent />
      </div>
    )
  }

}

export default App;
