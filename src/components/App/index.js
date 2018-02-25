import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import namedRoutes from '../../namedRoutes';

import Nav from '../Nav';
import Footer from '../Footer';
import About from '../About';
import Strategy from '../Strategy';
import Management from '../Management';
import Contacts from '../../containers/Contacts';
import Legal from '../Legal';
import E404 from '../errors/E404';

import s from './styles.css';

const App = () => (
  <div className={s.container}>
    <div className={s.content}>
      <aside className={s.aside}>
        <div className={s.fix}>
          <Nav/>
        </div>
      </aside>
      <main className={s.main}>
        <Switch>
          <Route exact path={namedRoutes.about} component={About}/>
          <Route exact path={namedRoutes.strategy} component={Strategy}/>
          <Route exact path={namedRoutes.management} component={Management}/>
          <Route exact path={namedRoutes.contacts} component={Contacts}/>
          <Route exact path={namedRoutes.legal} component={Legal}/>
          <Route exact path="*" component={E404}/>
        </Switch>
      </main>
    </div>
    <div className={s.footer}>
      <Footer/>
    </div>
  </div>
);

const ComponentWithRouter = withRouter(App);
export default ComponentWithRouter;
