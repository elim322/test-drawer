import React, { Component } from 'react';
import logo from './dignii.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openNav = () => {
    if (
      document.getElementById('mySidenav') &&
      document.getElementById('main') &&
      document.getElementById('hamburger')
    ) {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
      document.getElementById('hamburger').style.display = 'none';
    }
  };

  closeNav = () => {
    if (
      document.getElementById('mySidenav') &&
      document.getElementById('main') &&
      document.getElementById('hamburger')
    ) {
      document.getElementById('mySidenav').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
      document.getElementById('hamburger').style.display = 'block';
    }
  };

  render() {
    return (
      <div>
        <div
          id="mySidenav"
          className="sidenav" /*onMouseLeave={this.closeNav} */
        >
          <a className="closebtn" onClick={this.closeNav}>
            &times;
          </a>
          <div className="nav-title">
            <img src={logo} style={{ height: '50px', width: '50px' }} />
            <h2>Menu</h2>
          </div>
          <h3>Diversity Dashboard</h3>
          <a href="#">Avg. Income vs Demographics</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <hr />
          <h3>Employee Experience</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <hr />
          <a href="#">Admin</a>
          <a href="#">Resources</a>
          <a href="#">Sign In</a>
        </div>

        <div id="main">
          <span
            id="hamburger"
            className="sandwich"
            styles={{ cursor: 'pointer' }}
            onClick={this.openNav}
          >
            &#9776;
          </span>
        </div>
      </div>
    );
  }
}

export default App;
