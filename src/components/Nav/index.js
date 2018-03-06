import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import namedRoutes from '../../namedRoutes';

import s from './styles.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsOpen: false
    };

    this._toggleMenu = this._toggleMenu.bind(this);
    this._closeMenu = this._closeMenu.bind(this);
  }

  _toggleMenu() {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    });
  }

  _closeMenu() {
    this.setState({
      menuIsOpen: false
    });
  }

  render() {
    const renderLink = (to, text) => (
      <NavLink
        exact
        to={to}
        className={s.link}
        activeClassName={s.activeLink}
        onClick={this._closeMenu}>
        {text}
      </NavLink>
    );

    const renderNav = (className) => (
      <nav className={className}>
        {renderLink(namedRoutes.about, 'About')}
        {renderLink(namedRoutes.strategy, 'Strategy')}
        {/* renderLink(namedRoutes.management, 'Management') */}
        {renderLink(namedRoutes.contacts, 'Contacts')}
        {/* renderLink(namedRoutes.legal, 'Legal') */}
      </nav>
    );

    const renderDropdown = () => {
      if (this.state.menuIsOpen) {
        return (
          <div className={s.dropdown}>
            {renderNav(s.mobileNav)}
          </div>
        );
      }

      return null;
    };

    return (
      <div className={s.aside}>
        <div className={s.logo}>
          <img src={require('../../assets/images/logo.svg')}/>
        </div>

        <div className={s.mobileLogo}>
          <img src={require('../../assets/images/mobileLogo.svg')}/>
        </div>

        {renderNav(s.nav)}

        <div className={s.mobileBurger}>
          <button type="button" onClick={this._toggleMenu}>
            <img src={require('../../assets/images/hamburger.svg')}/>
          </button>
        </div>

        {renderDropdown()}
      </div>
    );
  }
}

export default Nav;
