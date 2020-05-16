import chonkygif from './ChonkyCat.gif';
import rsvpgif from './RSVP-Up.gif';
import stockgif from './StockTracker.gif';
import repopng from './RepoRetriever.png';
import bluegif from './BlueDaisy.gif';
import myportfolio from './MyPortfolio.gif';

const portfolioData = [
  {
    title: 'Chonky Cat',
    image: chonkygif,
    description:
      "This application returns a list of extra-large cats that are available for adoption with in 150 miles of the user's zipcode.  It utilizes MongoDB's input flexibility to store information gathered from a built in web scraper and the Petfinder API.  It also implements a MySQL database seeded with the latitude and longitude of every zip code in the US for quick search results.  Big cats need love too!",
    tech:
      'React, Node.js, Webpack, Babel, Express, MongoDB, MySQL, REST, AWS EC2',
    github: 'https://github.com/RomanEmmons/chonky-cat',
  },

  {
    title: 'RSVP-Up',
    image: rsvpgif,
    description:
      'This is a MeetUp clone that I created with an AGILE team of 3 other engineers.  I had a lot of fun scaling this app and load testing it with Artillery JS and New Relic.  It implements Redis data caching to benchmark at 10k rps with an average latency of 150ms while querying a database of over 35 million records!',
    tech:
      'React, Node.js, Webpack, Babel, Express, MySQL, Redis, , New Relic, Artillery.js, Faker.js, AWS EC2',
    github: 'https://github.com/Dr-Katherine-Johnson/RSVP',
  },

  {
    title: 'Stock Tracker',
    image: stockgif,
    description:
      'Stock Tracker is a Robinhood clone built with microservice architecture.  It implements Docker Compose for easy microservice and database deployment.  It also includes a testing suite with Jest, Mocha, and Chai for a gauranteed UX!',
    tech:
      'React, Node.js, Webpack, Babel, Express, MongoDB, Docker, Mocha, Jest, Chai, Faker.js, AWS EC2',
    github: 'https://github.com/Stock-Tracker/about-microservice',
  },
  {
    title: 'Blue Daisy Way',
    image: bluegif,
    description:
      'This is fully responsive single page artist portfolio implements CSS grid and flex for a beautiful UI regardless of screen size!',
    tech: 'React, Node.js, Webpack, Babel, Express, vanilla CSS, HTML, AWS EC2',
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
      "So meta... this site was 100% created by me. No 'Create React App', Bootstrap, or template of any kind.",
    tech:
      'React, Webpack, Babel, Node.js, Express, CSS, HTML, Nginx, PM2, AWS EC2, SSL',
    github: 'https://github.com/RomanEmmons/romanportfolio',
  },
];

export default portfolioData;
