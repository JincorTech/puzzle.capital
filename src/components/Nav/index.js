import React from 'react';
import { Link } from 'react-router-dom';

import namedRoutes from '../../namedRoutes';

export default () => (
  <nav>
    <Link to={namedRoutes.about}>about</Link>
    <Link to={namedRoutes.strategy}>strategy</Link>
    <Link to={namedRoutes.management}>management</Link>
    <Link to={namedRoutes.contacts}>contacts</Link>
    <Link to={namedRoutes.legal}>legal</Link>
    <Link to="/e404">empty spaces</Link>
  </nav>
);
