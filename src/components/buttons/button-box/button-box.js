import React, {Component} from 'react';
import Acept from '../../buttons/acept';
import Decline from '../../buttons/decline';

import './buttons-box.css';

export default class ButtonsBox extends Component{
    render () {
        const {idForComment, onHideCommentDialog, onPushCommentDialog, getData} = this.props;
        
        return (
            <div className="buttonsbox">
                <Acept 
                idForComment = {idForComment}
                onPushCommentDialog = {onPushCommentDialog}
                getData = {getData}
                /> 
                <Decline 
                onHideCommentDialog = {onHideCommentDialog}
                />
            </div>
        );
    }
}

