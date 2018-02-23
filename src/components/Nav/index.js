import React from 'react';
import { NavLink } from 'react-router-dom';

import namedRoutes from '../../namedRoutes';

import s from './styles.css';

const Nav = () => {
  const renderLink = (to, text) => (
    <NavLink
      exact
      to={to}
      className={s.link}
      activeClassName={s.activeLink}>
      {text}
    </NavLink>
  );

  return (
    <div className={s.aside}>
      <div className={s.logo}>
        <img src={require('../../assets/images/logo.svg')}/>
      </div>

      <nav className={s.nav}>
        {renderLink(namedRoutes.about, 'About')}
        {renderLink(namedRoutes.strategy, 'Strategy')}
        {renderLink(namedRoutes.management, 'Management')}
        {renderLink(namedRoutes.contacts, 'Contacts')}
        {renderLink(namedRoutes.legal, 'Legal')}
      </nav>
    </div>
  );
};

export default Nav;
