import chonkypng from './ChonkyCat.png';
import rsvppng from './RSVP-Up.png';
import stockpng from './StockTracker.png';
import repopng from './RepoRetriever.png';
import bluepng from './BlueDaisy.png';
import myportfolio from './MyPortfolio.png';

const portfolioData = [
  {
    title: 'Chonky Cat',
    image: chonkypng,
    description:
      "This application returns a list of extra-large cats that are available for adoption with in 150 miles of the user's zipcode.  It utilizes MongoDB's input flexibility to store information gathered from a built in web scraper and the Petfinder API.  It also implements a MySQL database seeded with the latitude and longitude of every zip code in the US for quick search results.  Big cats need love too!",
    tech:
      'React, Node.js, Webpack, Babel, Express, MongoDB, MySQL, REST, AWS EC2',
    github: 'https://github.com/RomanEmmons/chonky-cat',
  },

  {
    title: 'RSVP-Up',
    image: rsvppng,
    description:
      'This is a MeetUp clone that I created with an AGILE team of 3 other engineers.  I had a lot of fun scaling this app and load testing it with Artillery and New Relic.  It implements Redis data caching to benchmark at 10k rps with an average latency of 150ms while querying a database of over 35 million records!',
    tech:
      'React, Node.js, Webpack, Babel, Express, MySQL, Redis, , New Relic, Artillery, Faker.js, AWS EC2',
    github: 'https://github.com/Dr-Katherine-Johnson/RSVP',
  },

  {
    title: 'Stock Tracker',
    image: stockpng,
    description:
      'Stock Tracker is a full stack Robinhood clone built with microservice architecture.  It implements Docker Compose for seamless deployment of both the microservice and the database associated with it.  It also includes tests suites built with Jest, Mocha, and Chai for a gauranteed UX!',
    tech:
      'React, Node.js, Webpack, Babel, Express, MongoDB, Docker, Mocha, Jest, Chai, Faker.js, AWS EC2',
    github: 'https://github.com/Stock-Tracker/about-microservice',
  },
  {
    title: 'Blue Daisy Way',
    image: bluepng,
    description:
      'This fully responsive single page artist portfolio implements CSS grid and flex for a beautiful UI regardless of screen size!',
    tech:
      'React, Node.js, Webpack, Babel, Express, vanilla CSS, Nodemailer, HTML, AWS EC2',
    github: 'https://github.com/RomanEmmons/Molly-Souza-Artist-Portfolio',
  },
  {
    title: 'Repo Retriever',
    image: repopng,
    description:
      "This full stack application utilizes the Github API to return information about a specified user's top 25 repos.  The repos are sorted by number of stars and persist in MongoDB.",
    tech: 'React, Node.js, Express, MongoDB, REST, CSS, HTML',
    github: 'https://github.com/RomanEmmons/RepoRetriever',
  },
  {
    title: 'My Portfolio',
    image: myportfolio,
    description:
      'This site was 100% built, configured, and deployed by me. No templates or themes were used, and it was not bootstrapped with Create React App.',
    tech:
      'React, Webpack, Babel, Node.js, Express, CSS, HTML, Nginx, PM2, AWS EC2, SSL',
    github: 'https://github.com/RomanEmmons/romanportfolio',
  },
];

export default portfolioData;
