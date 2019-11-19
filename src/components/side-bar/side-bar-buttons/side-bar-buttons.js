import React, { Component } from 'react';
import AddNewPost from '../../buttons/add-new-post';
import ShowProfile from '../../buttons/show-profile-info'

import './side-bar-buttons.css';

export default class SideButtons extends Component {
    render() {

        return (
            <div className="sideButtons">
                <AddNewPost onShowDialog={this.props.onRenderDialog} />
                <ShowProfile props={this.props.onRenderProfile} />
            </div>
        );
    }
}

