import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'

import './ok-button.css'

export default class OkButton extends Component {
    render () {

        const {props:hideCard} = this.props;
        return (
            <button
             type="button"
             className="btn btn-success"
             onClick={()=>hideCard()}
             >
                <FontAwesomeIcon icon={faThumbsUp}/>
            </button>
        );
    }
}