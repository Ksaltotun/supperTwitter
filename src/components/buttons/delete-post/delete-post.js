import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './delete-post.css';

export default class DeletePost extends Component {
    render () {
        return (
            <button
                type="button"
                className="btn btn-outline-danger">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        );
    }
}