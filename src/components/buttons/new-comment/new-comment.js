import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import './new-comment.css';

export default class NewComment extends Component {
    render(){
        return (
            <button
                type="button"
                className="btn btn-outline-info">
                <FontAwesomeIcon icon={faComment} />
            </button>
        );
    }
}