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
        <a href="https://github.com/RomanEmmons/">Roman Emmons</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="mailto:roman.emmons@gmail.com">roman.emmons@gmail.com</a>
          </li>
          <li>
            <a>||</a>
          </li>
          <li>
            <a href="tel:+14154390623">(415)439-0623</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
