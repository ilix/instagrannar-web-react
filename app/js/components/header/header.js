import React from 'react';
import global from '../global.json';

export default class Header extends React.Component {
  render() {
    return (
      <div>
  		  <header className="header">
          <h1 className="header__title">
            <a className="header__title-link" href="/">{global.brand}</a>
          </h1>
  		  </header>
  		</div>
    );
  }
}