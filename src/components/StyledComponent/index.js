import React, { Component } from "react";
import "./style.css";
import style from "./style.module.css";
import "./style.scss";

export default class Index extends Component {
  render() {
    const myStyle = {
      color: "white",
      backgroundColor: "green",
      padding: "20px",
      fontSize: "24px"
    }
    return (
      <div>
        <h4 style={myStyle}>Hello inline style!</h4>
        <h4 className="my-header">This header styled from style.css</h4>
        <h4 className={style.header}>This header styled from style.module.css</h4>
        <h4 className="header">This header styled from style.scss</h4>
        <p>This is normal text.</p>
      </div>
    )
  }
}
