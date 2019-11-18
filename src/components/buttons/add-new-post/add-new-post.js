import React, {Component} from 'react';
import './add-new-post.css';

export default class AddNewPost extends Component{
    render () {
        const {props:showDialog} = this.props;
        
        return (
            <input
            type="button"
            className="btn btn-primary btn-lg"
            value="Add NeWs"
            onClick={()=>showDialog()}
        />

        );
    }
}