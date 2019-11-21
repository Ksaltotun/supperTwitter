import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

import "./delete-post.css";

export default class DeletePost extends Component {
  onClick = () => {
    const {onDeleteFunc, id} = this.props;
    onDeleteFunc(id);
  };
  render() {
    return (
      <button type="button" className="btn btn-outline-danger" onClick={this.onClick}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    );
  }
}
