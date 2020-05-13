import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar/Toolbar.js';
import SideDrawer from './SideDrawer/SideDrawer.js';
import Backdrop from './Backdrop/Backdrop.js';

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
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          click={this.backdropClickHandler}
        />
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <p>HEY, It's content!</p>
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
