import React, {Component} from 'react';
import Acept from '../../buttons/acept';
import Decline from '../../buttons/decline';

import './buttons-box.css';

export default class ButtonsBox extends Component{
    render () {
        return (
            <div className="buttonsbox">
                <Acept/> <Decline/>
            </div>
        );
    }
}