import React, {Component} from 'react';
import CommentCard from '../comment-card'

import './comments-list.css';

export default class CommentsList extends Component {
  render () {
    const {props} = this.props;
    
    const comments = props.map((comment) => {
      return <CommentCard key={comment.id} {...comment}/>
    })
    
    return (
    <div>
      {comments}
    </div>
      
    );
  }
}