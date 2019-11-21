import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment} from "@fortawesome/free-solid-svg-icons";

import "./new-comment.css";

export default class NewComment extends Component {
  onClick = e => {
    const {onShowCommentDialog, id} = this.props;
    onShowCommentDialog(id);
  };

  render() {
    return (
      <button type="button" className="btn btn-outline-info" onClick={this.onClick}>
        <FontAwesomeIcon icon={faComment} />
      </button>
    );
  }
}
