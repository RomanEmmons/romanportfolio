import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js';
import './Toolbar.css';
import drawerToggleButton from '../SideDrawer/DrawerToggleButton.js';

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">Roman Emmons</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
