import React, { Component } from 'react';
import twitapiService from '../../../containers/twitapi';
import CommentDialog from '../new-comment-dialog';
import NewsCard from '../news-card';

import './news-board.css';

export default class NewsBoard extends Component {

    twitapi = new twitapiService();
    state = {
        posts: [],
        newComment: null,
        newPost: null,
    }
    
    renderPosts() {
        this.twitapi
            .getPosts()
            .then((resp) => {
                this.setState({
                    posts: [...resp].map((post) => {
                        //title, author, body, deleteFunc, showCommentDialog, hideCommentDialog
                        return (
                            <NewsCard
                             key = {post.id}
                             id = {post.id}
                             title = {post.title}
                             body = {post.body} 
                             deleteFunc = {this.handlerDeletePost}
                             showCommentDialog = {this.handlerShowCommentDialog}/>
                        );
                    })
                });
            });
    }

    hidePostDialog = () => {
        this.setState({
            newPost: null
        })
    }

    pushData = (title, text, author = 'Anonimus') => {
        const twitapi = new twitapiService();
        const data = {
            'title': title,
            'body': text,
            'author': author
        };
        twitapi.pushData('posts', data);
        this.handlerHideCommentDialog();

    }

    handlerDeletePost = (id) => {
        const newState = [...this.state.posts].filter((post) => {
            return post.id !== id;
        });
        this.setState({
            posts: [...newState]
        });
        this.twitapi.deleteData(id);
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

    IsPostAdded = () => {
        this.setState(
            {
                newPost: 'added'
            });
    }

    componentDidMount () {
        this.renderPosts();          
    }

    render() {
        const { newPost, newComment, posts } = this.state;

    return(
        <section className = "newsBoard " >
            {posts}
            {  newComment === null ? null: <CommentDialog
            onHideCommentDialog = {this.handlerHideCommentDialog}
            onPushComment = {this.handlerPushComment}
            idForComment = {newComment}
            />}
            {newPost === null ? null : <NewsCard/>}
        </section>
        );
    };
}

