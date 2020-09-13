import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/reducers';
import App from './App/index';

import './style.scss';

const Application = () => {
  const loggerMiddleware = createLogger();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunkMiddleware, loggerMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Application />, document.getElementById('app-frontend'));
