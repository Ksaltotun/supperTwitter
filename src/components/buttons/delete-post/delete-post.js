import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './delete-post.css';

export default class DeletePost extends Component {
    render () {
        const {props:[deleteFunc, postId]} = this.props;
        
        return (
            <button
                type="button"
                className="btn btn-outline-danger"
                onClick={()=>deleteFunc(postId)}
                >
                
                <FontAwesomeIcon icon={faTrash} />
            </button>
        );
    }
}