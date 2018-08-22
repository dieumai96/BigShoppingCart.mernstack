import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import myReducers from './reducers/index';
import { createStore  , applyMiddleware ,compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const middleware = [thunk];
const store = createStore(
  myReducers,
  compose(applyMiddleware(...middleware)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
