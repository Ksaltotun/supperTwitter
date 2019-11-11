import React from 'react';
import './new-post-dialog.css';

const NewPostDialog = () => {
    return (
        <div className="newPostDialog">
            <span>New Post</span>
            <span>Enter title:</span><input type="text"/>
            <span>Enter your news</span><input type="text"/>   
        </div>
    );
}

export default NewPostDialog
