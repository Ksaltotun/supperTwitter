import React, {Component} from 'react';
import ButtonsBox from '../../buttons/button-box';

import './new-post-dialog.css';

export default class NewPostDialog extends Component {
    render() {
        return (
            <form className="newpost jumbotron">
                <h2>Write new post:</h2>
                <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">Thema</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Write posts theme here" 
                    id="inputDefault"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleTextarea">What new?</label>
                    <textarea className="form-control"  rows="3" ></textarea>
                </div>
                <ButtonsBox/>
            </form>
        );
    }
}


