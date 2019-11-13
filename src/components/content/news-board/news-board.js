import React, { Component } from 'react';
import twitapiService from '../../../containers/twitapi';

import Post from '../news-card';

import './news-board.css';


export default class NewsBoard extends Component {

    twitapi = new twitapiService();
    state = {
        posts: []
    }
    constructor() {
        super();
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
    render() {
        const { posts } = this.state;
        const renderNews = posts.map((item) => {
            return (
                <Post key={item.id} {...item} />
            );
        });
       
        return (
            <section className="newsBoard">
                {renderNews}
            </section>
        );
    };
}
