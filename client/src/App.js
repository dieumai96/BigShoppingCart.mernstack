import React, { Component } from 'react';
import Login from './components/Login/Login';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './common/PrivateRoute';
import Confirm from './components/Confirm/Confirm';
import { SetCurrentUser } from './actions/authAction';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';


class App extends Component {

  render() {
    const decoded = jwt_decode(localStorage.jwtToken);
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);

      // set user and is authenticated 
      store.dispatch(SetCurrentUser(decoded));
    }
    return (
      <Provider store={store}>
        <Router>
          <div className="main-app">
            <Switch>
              <Route path="/Authenticated/mhjyokmh" exact component={Login} />
              <PrivateRoute exact path="/confirm" component={Confirm} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
