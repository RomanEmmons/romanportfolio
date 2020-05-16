import React from 'react';

import './Sidebar.css';

const sidebar = (props) => (
  <aside>
    <div className="aside">
      <img
        className="sidebar-image"
        src="../../images/circle-cropped.png"
      ></img>
      <p className="about">
        Hello! I’m Roman, a San Francisco based Software Engineer. I build and
        deploy responsive full-stack Javascript applications using React,
        Webpack, Babel, Node.js, Express, MongoDB, MySQL, Redis, Docker, AWS,
        and Nginx... among other technologies.
      </p>
      <p className="about">
        If you have a project that is inclusive and effects peoples' lives in a
        positive way, I'd like to discuss how my experience and your vision can
        align to make the internet a better place.
      </p>
      <a
        className="about underline"
        href="https://docs.google.com/document/d/1nFQStBEMXM8axnWOH1fD_k7nsr8zGqjFr1zNUMbKLvQ/edit?usp=sharing"
      >
        Check out my resume!
      </a>
    </div>
  </aside>
);

export default sidebar;
