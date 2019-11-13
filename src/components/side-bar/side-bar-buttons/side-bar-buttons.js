import React from 'react';
import AddNewPost from '../../buttons/add-new-post';
import ShowProfile from '../../buttons/show-profile-info'

import './side-bar-buttons.css';

const SideButtons = () => {
    return (
        <div className="sideButtons">
            <AddNewPost/>
            <ShowProfile/>
        </div>
    );
}

export default SideButtons