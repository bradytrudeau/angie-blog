import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import Admin from '../Admin/Admin';
import InfoPage from '../InfoPage/InfoPage';
import Home from '../Home/Home';
import LoginPage from '../LoginPage/LoginPage';
import './App.css';
import Recipes from '../Recipes/Recipes';
import Restaurants from '../Restaurants/Restaurants';
import Contact from '../Contact/Contact';
import ImageUpload from '../ImageUpload/ImageUpload';
import EditPost from '../EditPost/EditPost';
import ViewPost from '../ViewPost/ViewPost';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            <Route
              exact
              path="/recipes"
              component={Recipes}
            />
            <Route
              exact
              path="/restaurants"
              component={Restaurants}
            />
            <Route
              exact
              path="/contact"
              component={Contact}
            />
            <Route
              exact
              path="/info"
              component={InfoPage}
            />
            <Route
              exact
              path="/home"
              component={Home}
            />
            <Route
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/admin"
            />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/admin"
              component={Admin}
            />
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/add"
              component={ImageUpload}
            />
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/edit"
              component={EditPost}
            />
            <Route
              path="/:slug"
              component={ViewPost}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
