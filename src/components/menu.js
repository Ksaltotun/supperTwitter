import React from 'react';
import './menu.css';

const Menu = ({menuPoints}) => {
    const menu = menuPoints.map((item) => {
        return (
            <input key={item.id} type="button" value={item.name} className="menuItem"/>
        );
    })
    return (
        <div className="mainMenu">
            {menu}
        </div>
    );
}

export default Menu