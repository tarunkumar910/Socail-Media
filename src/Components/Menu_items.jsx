import React from 'react';
import { menuItemsData } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import './css/MenuItems.css'; 

const MenuItems = ({ setSidebarOpen }) => {
  return (
    <div className="menu-items-container">
      {menuItemsData.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className="menu-item"
          onClick={() => setSidebarOpen(false)}
        >
          <span className="menu-icon"><Icon /></span>
          <span className="menu-label">{label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default MenuItems;
