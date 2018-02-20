import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          padding: 20,
          background: "#00b140",
          color: "#ecf0f1"
        }}
      >
        <div
          style={{
            alignSself: "flex-start",
            margin: "auto"
          }}
        >
          All rights reserved 2018
        </div>
        <div
          style={{
            alignSself: "flex-end",
            margin: "auto"
          }}
        >
          <RaisedButton
            label="ID"
            disabled={this.props.lang == "id"}
            labelColor="#00b140"
            backgroundColor="#ecf0f1"
            onClick={() => this.props.changeLanguage("id")}
          />
          <RaisedButton
            label="EN"
            disabled={this.props.lang == "en"}
            labelColor="#00b140"
            backgroundColor="#ecf0f1"
            onClick={() => this.props.changeLanguage("en")}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ lang }) {
  return { lang };
}

export default connect(mapStateToProps, actions)(Footer);
