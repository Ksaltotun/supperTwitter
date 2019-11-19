import React, {Component} from 'react';
import './add-new-post.css';

export default class AddNewPost extends Component{
    render () {
        const {onShowDialog} = this.props;
        
        return (
            <input
            type="button"
            className="btn btn-primary btn-lg"
            value="Add NeWs"
            onClick={()=>onShowDialog()}
        />

        );
    }
}