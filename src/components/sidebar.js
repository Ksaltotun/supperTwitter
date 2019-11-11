import React from 'react';
import Menu from './menu';
import './sidebar.css';

const menuPoints = [{id: 1, name: 'Refresh'}, {id: 2, name:'New Post'}, {id: 3, name: 'About User'}];

const Sidebar = () => {
    return (
        <section className="sidebar">
            <Menu menuPoints = {menuPoints}/>
        </section>
    );
}

export default Sidebar;