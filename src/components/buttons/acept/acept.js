import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

import "./acept.css";

export default class Acept extends Component {
  onClick = e => {
    const {idForComment, onPushCommentDialog, getData} = this.props;
    const {title, body} = getData();
    onPushCommentDialog(title || idForComment, body);
  };

  render() {
    return (
      <button type="button" className="btn btn-outline-success" onClick={this.onClick}>
        <FontAwesomeIcon icon={faCheckCircle} />
      </button>
    );
  }
}
