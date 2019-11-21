import React, { Component } from 'react';
import twitapiService from '../../../containers/twitapi';
import CommentDialog from '../new-comment-dialog';
import NewsCard from '../news-card';

import './news-board.css';

export default class NewsBoard extends Component {

    twitapi = new twitapiService();
    state = {
        postsRendered: null,
        newComment: null,
        refresher: null,
    }
    constructor() {
        super();

        this.postsList = [];
    }
    //title, author, body, deleteFunc, showCommentDialog, hideCommentDialog
    async renderPosts() {
        const resp = await this.twitapi.getPosts();
        const posts = await resp.map((post) => {
            return (<NewsCard
                key={post.id}
                id={post.id}
                title={post.title}
                author={post.author}
                body={post.body}
                deleteFunc={this.handlerDeletePost}
                showCommentDialog={this.handlerShowCommentDialog} />)
        })
        this.postsList = [...posts];
        this.setState({
            postsRendered: this.postsList.length
        });
    }

    handlerDeletePost = (id) => {
        const buffArray = this.postsList.filter((post) => {
            return post.key.toString() !== id.toString()
        });

        this.postsList = [...buffArray];
        this.twitapi.deleteData(id);
        this.setState({
            postsRendered: this.state.postsRendered - 1
        })
    };

    handlerShowCommentDialog = (id) => {
        this.setState({
            newComment: id
        })
    }

    handlerHideCommentDialog = () => {
        this.setState({
            newComment: null
        })
    }

    handlerPushComment = async (id, text) => {
        this.twitapi.addComment(id, text);
        this.handlerHideCommentDialog();
    }

    componentDidMount() {
        this.renderPosts();
    }

    componentDidUpdate() {
        if (this.state.refresher !== this.props.refresher) {
           
            this.setState({
                refresher:this.props.refresher
            })
            this.renderPosts();
        }
    }

    render() {
        const { newComment, postsRendered } = this.state;
        
        return (
            <section className="newsBoard " >
                {postsRendered === null ? null : this.postsList}
                {newComment === null ? null : <CommentDialog
                    onHideCommentDialog={this.handlerHideCommentDialog}
                    onPushComment={this.handlerPushComment}
                    idForComment={newComment}
                />}
               
            </section>
        );
    };
}

