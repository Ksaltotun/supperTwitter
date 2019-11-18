import React, {Component} from 'react';
import ButtonsBox from '../../buttons/button-box';

import './new-post-dialog.css';

export default class NewPostDialog extends Component {

    getData = () => {
        const datas = {
            body: document.getElementById('newpostdata').value,
            title: document.getElementById('postthema').value
        }
        
        return datas
    }

    render() {
        
        const {props:[okButton, noButton]} = this.props;
        
        return (
            <form className="newpost jumbotron">
                <h2>Write new post:</h2>
                <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">Thema</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Write posts theme here" 
                    id="postthema"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="newPost">What new?</label>
                    <textarea className="form-control" id="newpostdata"  rows="3" ></textarea>
                </div>
                <ButtonsBox props={[okButton, noButton, this.getData]} />
            </form>
        );
    }
}


