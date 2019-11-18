import React, {Component} from 'react';
import OkButton from '../../buttons/ok-button'
import twitApi from '../../../containers/twitapi'

import './profile-card.css';

export default class ProfileCard extends Component {

    apiService = new twitApi();

    state = {
        userName:null,
        description:null
    }
    constructor () {
        super();
       this.getProfileData(); 
    }

    getProfileData () {
        this.apiService
            .getProfile()
            .then(({name, description}) => {
                this.setState({
                    userName:name,
                    description:description
                });
            })
    }

    render () {
        const {userName, description} = this.state;
        const {props:hideCard} = this.props;
        return (
            <div className="card text-white bg-info mb-3 profilecard">
                <div className="card-header">{userName}</div>
                <div className="card-body">
                    <h4 className="card-title">{description}</h4>
                </div>
            <OkButton props={hideCard}/>
            </div>
        );
    }
}

