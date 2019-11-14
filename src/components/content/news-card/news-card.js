import React, {Component} from 'react';
import DeletePost from '../../buttons/delete-post'
import NewComment from '../../buttons/new-comment'

import './news-card.css';

export default class Post extends Component {
    
    render(){
        const {id, title, author, body} = this.props;
        return (
            <div 
                className="jumbotron"
                         
            >
                <h2><span>#{id}. {title}</span><span>author: {author}</span></h2>
                <p>{body}</p>
                <DeletePost/>
                <NewComment/>
            </div>
        );
    };
}

