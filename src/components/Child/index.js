import React, { Component } from 'react';

class Index extends Component {
  render() {
    return (
      <div>
        <h3>This is Child Component</h3>
        <p>{this.props.message}</p>
      </div>
    );
  }
}





export default Index;