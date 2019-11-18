import React, {Component} from 'react';
import SideButtons from './side-bar-buttons';

import './side-bar.css';


export default class Sidebar extends Component {
    render () {
       
        return (
            <section className="sidebar">
                <SideButtons {...this.props}/>
            </section>
        );        
    }
}