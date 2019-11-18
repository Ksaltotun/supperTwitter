import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import './new-comment.css';

export default class NewComment extends Component {
    
    render(){
        const {props:[showCommentDialog, id]} = this.props;
        
        return (
            <button
                type="button"
                className="btn btn-outline-info"
                onClick={()=>showCommentDialog()}
                >
                <FontAwesomeIcon icon={faComment} />
            </button>
        );
    }
}