import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle }  from '@fortawesome/free-solid-svg-icons';

import './acept.css';

export default class Acept extends Component {


    render (){
        
        const {idForComment, onPushCommentDialog, getData} = this.props;
        return (
            <button                
                type="button"
                className="btn btn-outline-success"
                onClick={(e) => {
                    const {title, body} = getData();
                    onPushCommentDialog(title || idForComment, body);
                }}
            >
                <FontAwesomeIcon icon={faCheckCircle} />
            </button>
            
        );
    }
}

/*

*/