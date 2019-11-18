import React, { Component } from 'react';

import './comment-card.css'

export default class CommentCard extends Component {
  render() {
    const { id, body, postId, author } = this.props;

    return (
      <div className="alert alert-info">
        <h2>Id:{id}</h2>
        <p>{body}</p>
        <h2>{author}</h2>
      </div>

    );
  }
}