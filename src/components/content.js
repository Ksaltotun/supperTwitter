import React from 'react';
import getData from '../containers/getData';
import NewPostDialog from './new-post-dialog'
import './content.css';

const Content = () => {
    
    return (
        <section className="content">
            <NewPostDialog/>
        </section>
    );
}
export default Content;