import React, {Component} from 'react';
import './news-card.css';

export default class Post extends Component {
    
    render(){
        
        const {id, title, author, body} = this.props;
        return (
            <div 
                className="jumbotron"
                onClick={()=>console.log('news')}         
            >
                <h2>#{id}. {title} author: {author}</h2>
                <hr className="my-4"></hr>
                <p>{body}</p>
            </div>
        );
    };
}

