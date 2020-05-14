import React from 'react';

import './Sidebar.css';

const sidebar = (props) => (
  <aside>
    <img className="sidebar-image" src="../../images/circle-cropped.png"></img>
    <p className="about">
      Hello! I’m Roman, a San Francisco based Software Engineer. I build and
      deploy responsive full-stack Javascript applications using React, Node.js,
      Express, MongoDB, MySQL, Redis, AWS, Nginx among other technologies.
    </p>
    <p className="about">
      If you have a project that is inclusive and effects peoples' lives in a
      positive way, I'd like to discuss how my experience and your vision can
      align to make the internet a better place.
    </p>
  </aside>
);

export default sidebar;
