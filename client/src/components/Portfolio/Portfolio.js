import React from 'react';
import './Portfolio.css';

const portfolio = (props) => {
  return (
    <main>
      {props.portfolioData
        ? props.portfolioData.map((item, ind) => {
            return (
              <div key={ind}>
                <a href={item.github}>
                  <span className="portfolio-item">
                    <img className="item-image" src={item.image}></img>
                    <div className="github-icon">
                      <p className="overlay">Visit the repo</p>
                      <span>Z</span>
                    </div>

                    <div>
                      <h1 className="item-title">{item.title}</h1>
                      <p className="item-description">{item.description}</p>
                      <p className="item-description">{item.tech}</p>
                    </div>
                  </span>
                </a>
              </div>
            );
          })
        : null}
    </main>
  );
};

export default portfolio;
