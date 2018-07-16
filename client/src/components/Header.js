import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            SurveyYay
          </a>
          <ul className="right">
            <li>
              Login With Google
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
