import React, {Component} from "react";
import ButtonsBox from "../../buttons/button-box";

import "./new-comment-dialog.css";

export default class CommentDialog extends Component {
  getData = () => {
    const datas = {
      body: document.getElementById("newccomment").value,
    };

    return datas;
  };
  render() {
    const {idForComment, onHideCommentDialog, onPushComment} = this.props;

    return (
      <div className="commentdialog jumbotron">
        <h2>Your comment here</h2>
        <hr className="my-4"></hr>
        <textarea className="form-control" id="newccomment" rows="3"></textarea>
        <ButtonsBox
          onHideCommentDialog={onHideCommentDialog}
          onPushCommentDialog={onPushComment}
          getData={this.getData}
          idForComment={idForComment}
        />
      </div>
    );
  }
}
