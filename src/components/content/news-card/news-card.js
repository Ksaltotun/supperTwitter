import React, { Component } from 'react';
import DeletePost from '../../buttons/delete-post';
import NewComment from '../../buttons/new-comment';
import CommentsList from '../comments-list';
import twitApi from '../../../containers/twitapi';
import concatCommentsAndPosts from '../../../containers/comment-post'

import './news-card.css';

export default class Post extends Component {
    state = {
        comments: null,
        isCommentsShow: false,
    }

    showOrHide = ({ target }) => {
        
        if (target.className === 'jumbotron' || target.parentNode.className === 'jumbotron') {
            if (!this.state.isCommentsShow) {
                const twitapi = new twitApi();
                twitapi.getComments()
                    .then((comments) => {
                        if (concatCommentsAndPosts(this.props.id, comments)) {
                            this.setState({
                                comments: <CommentsList props={concatCommentsAndPosts(this.props.id, comments)} />,
                                isCommentsShow: true
                            });
                        }
                    });

            } else {
                this.setState({
                    comments: null,
                    isCommentsShow: false
                });
            }
        }
    }

    render() {

        const { id, title, author, body, deleteFunc, showCommentDialog, hideCommentDialog } = this.props;

        const comments = this.state.comments;

        return (
            <div
                className="jumbotron"
                onClick={(e) => this.showOrHide(e)}
            >
                <h2><span>#{id}.{title}</span><span>author: {author}</span></h2>
                <hr className="my-4"></hr>
                <p>{body}</p>
                <hr className="my-4"></hr>
                {comments}
                <DeletePost props={[deleteFunc, id]} />
                <NewComment props={[showCommentDialog, hideCommentDialog, id]} />

            </div>
        );
    };
}

