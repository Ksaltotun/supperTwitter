import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan }  from '@fortawesome/free-solid-svg-icons';

import './decline.css';

export default class Decline extends Component {
    render (){
        return (
            <button
                type="button"
                className="btn btn-outline-danger"
            >
                <FontAwesomeIcon icon={faBan} />
            </button>
        );
    }
}