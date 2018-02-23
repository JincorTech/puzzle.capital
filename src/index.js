import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import 'normalize.css';
import './assets/main.css';
import './assets/fonts/Roboto/stylesheet.css';

import configureStore, { history } from './redux/configureStore';
import App from './components/App';

const store = configureStore({});

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component/>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(require('./components/App').default);
  });
}
