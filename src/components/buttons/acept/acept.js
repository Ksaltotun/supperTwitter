import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle }  from '@fortawesome/free-solid-svg-icons';

import './acept.css';

export default class Acept extends Component {
    render (){
        return (
            <button
                type="button"
                className="btn btn-outline-success"
            >
                <FontAwesomeIcon icon={faCheckCircle} />
            </button>
        );
    }
}