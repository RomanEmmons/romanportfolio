import React from 'react';

import './Sidebar.css';

const sidebar = (props) => (
  <aside>
    <img className="sidebar-image" src="../../images/circle-cropped.png"></img>
    <p className="about">
      Hello! I’m Roman, a San Francisco based Software Engineer. I have a
      passion for problem solving and learning about new technologies. I build
      and deploy responsive full-stack Javascript applications with Node.js,
      Express, MongoDB, MySQL, Redis, AWS, and Nginx.
    </p>
    <p className="about">
      If you have a project that is inclusive and effects peoples' lives in a
      positive way, I'd like to discuss how my experience and your vision can
      align to make the internet a better place.
    </p>
  </aside>
);

export default sidebar;
