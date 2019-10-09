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

  toggleDropDown = () => {
    const dropdown = document.getElementsByClassName('dropdown-btn');
    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
    }
  };

  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a className="closebtn" onClick={this.closeNav}>
            &times;
          </a>
          <div className="nav-title">
            <img src={logo} style={{ height: '50px', width: '50px' }} />
            <p>Dashboard Menu</p>
          </div>

          <a onClick={this.toggleDropDown} className="dropdown-btn">
            Diversity Dashboard
          </a>
          <div className="dropdown-container">
            <a href="#">Avg. Income vs Demographics</a>

            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          <a onClick={this.toggleDropDown} className="dropdown-btn">
            Employee Experience
          </a>
          <div className="dropdown-container">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          <a href="#">Analytics</a>
          <a href="#">Insights</a>
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
