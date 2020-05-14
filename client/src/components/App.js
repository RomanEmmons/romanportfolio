import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar/Toolbar.js';
import SideDrawer from './SideDrawer/SideDrawer.js';
import Backdrop from './Backdrop/Backdrop.js';
import Footer from './Footer/Footer.js';
import Sidebar from './Sidebar/Sidebar.js';
import Portfolio from './Portfolio/Portfolio.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false,
    };

    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  }

  drawerToggleClickHandler() {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  }

  backdropClickHandler() {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="wrapper" style={{ height: '100%' }}>
        <header>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            click={this.backdropClickHandler}
          />
        </header>
        {backdrop}
        <Portfolio />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
