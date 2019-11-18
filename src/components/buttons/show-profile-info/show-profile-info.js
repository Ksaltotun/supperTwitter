import React, { Component } from 'react';
import './show-profile-info.css';


export default class ShowProfile extends Component {
    render() {
        const {props:showProfile} = this.props;
        
        return (
            <input
                value="ShOw PrOFiLe InFo"
                className="btn btn-primary btn-lg"
                type="button"
                onClick={()=>showProfile()}
            >

            </input>


        );
    }
}