import React, {Component} from 'react';
import ButtonsBox from '../../buttons/button-box';

import './new-comment-dialog.css';

export default class CommentDialog extends Component {
  getData = () => {
    
  }
  render () {
    const {props:[showCommentDialog, hideCommentDialog]} = this.props;
    
    return (
      <div className="commentdialog jumbotron">
        <h2>Your comment here</h2>
        <hr className="my-4"></hr>
        <textarea className="form-control" id="newccomment" rows="3" ></textarea>
        <ButtonsBox props={[hideCommentDialog, showCommentDialog, this.getData]}/>
      </div>
    );
  }
}