import React, { Component } from "react";
import PropTypes from "prop-types";

// rcc code snippet

class MyCompPublicFuction extends Component {
  render() {
    // 비구조화 할당 문법으로 한번에 꺼내서 할당
    const { name, password, children } = this.props;
    return <div></div>; //return close
  } // render close
} // class close

export default MyCompPublicFuction;
