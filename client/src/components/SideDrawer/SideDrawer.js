import React from 'react';
import './SideDrawer.css';

const sideDrawer = (props) => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses} onClick={props.click}>
      <ul>
        <li>
          <a href="mailto:roman.emmons@gmail.com">Email</a>
        </li>
        <li>
          <a href="tel:+14154390623">Call</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
