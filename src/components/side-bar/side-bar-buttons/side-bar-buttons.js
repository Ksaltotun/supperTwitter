import React, {Component} from 'react';
import AddNewPost from '../../buttons/add-new-post';
import ShowProfile from '../../buttons/show-profile-info'

import './side-bar-buttons.css';

export default class SideButtons extends Component {
    render () {
        const {props:[showDialog, showProfile]} = this.props;
        
        return (
            <div className="sideButtons">
                <AddNewPost props={showDialog}/>
                <ShowProfile props={showProfile}/>
            </div>
        );
    }
}

