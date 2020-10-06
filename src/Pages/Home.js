import React, { Component } from "react";
import Head from "../Components/Home/Head";
import All from "../Components/Home/All";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Head />
        <All />
      </div>
    );
  }
}
