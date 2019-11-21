import React, {Component} from 'react';
import Acept from '../../buttons/acept';
import Decline from '../../buttons/decline';

import './buttons-box.css';

export default class ButtonsBox extends Component{
    render () {
        const {idForComment, onHideCommentDialog, onPushCommentDialog, getData, onPushData, onHidePostDialog } = this.props;
        
        return (
            <div className="buttonsbox">
                <Acept 
                idForComment = {idForComment}
                onPushCommentDialog = {onPushCommentDialog || onPushData}
                getData = {getData}
                /> 
                <Decline 
                onHideCommentDialog = {onHideCommentDialog}
                onHidePostDialog = {onHidePostDialog}
                />
            </div>
        );
    }
}

