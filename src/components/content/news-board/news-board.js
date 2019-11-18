import React, { Component } from 'react';
import twitapiService from '../../../containers/twitapi';
import NewComment from '../new-comment-dialog';

import Post from '../news-card';

import './news-board.css';

export default class NewsBoard extends Component {

    twitapi = new twitapiService();
    state = {
        posts: [],
        newComment:null,
        newPost: null,
        refresh: null
    }
    constructor(props) {
        super(props);
        this.renderPosts();
    }
    renderPosts() {
        this.twitapi
            .getPosts()
            .then((resp) => {
                this.setState({
                    posts: [...resp]
                });
            });
    }

    deletePost = (id) => {
        const newState = [...this.state.posts].filter((post)=>{
            return post.id !==id;
        });
        this.setState({
            posts:[...newState]
        });
        this.twitapi.deleteData(id);
    };

    showCommentDialog = () => {
        this.setState({
            newComment:<NewComment props={[this.hideCommentDialog, this.pushComment]}/>
        })
    }

    hideCommentDialog = () => {
        this.setState({
            newComment:null
        })
    }

    pushComment = () => {
        console.log('push comment!');
    }

    IsPostAdded = () => {
        this.setState(
            {
                newPost: 'added'
            });
    }

    componentDidUpdate(){
       
    }

    render() {
        
        const posts = [...this.state.posts];
        const {newComment, newPost} = this.state;

        const renderNews = posts.map((item) => {
            item.deleteFunc = this.deletePost; 
            item.showCommentDialog = this.showCommentDialog;
            item.hideCommentDialog = this.hideCommentDialog;
            return (
                <Post key={item.id} {...item} />
            );
        });
        
        return (
            <section className="newsBoard ">
    
                {newComment}
                {newPost}
                {renderNews}
            </section>
        );
    };
}
