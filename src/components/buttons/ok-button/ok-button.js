import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'

import './ok-button.css'

export default class OkButton extends Component {
    render () {

        return (
            <button
             type="button"
             className="btn btn-success"
             onClick={()=>this.props.onHideProfile()}
             >
                <FontAwesomeIcon icon={faThumbsUp}/>
            </button>
        );
    }
}