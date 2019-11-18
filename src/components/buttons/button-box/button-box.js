import React, {Component} from 'react';
import Acept from '../../buttons/acept';
import Decline from '../../buttons/decline';

import './buttons-box.css';

export default class ButtonsBox extends Component{
    render () {
        const {props:[okButton, noButton, getData, id]} = this.props;
        
        return (
            <div className="buttonsbox">
                <Acept props={[okButton, getData, id]}/> <Decline props={noButton}/>
            </div>
        );
    }
}

