import React, { Component } from 'react';
import { 
  Route, 
  Switch,
  Redirect,
  BrowserRouter as Router, 
} from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Search from './Search.js';
// import FilmList from './FilmList.js';
// import Favorites from './Favorites.js';
import FavoritesLogin from './FavoritesLogin.js';
import './App.css';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends Component {
  state = { user: null }

  setUser = user => {
    this.setState({ user: user.body });
  }

    render() {
        return (
            <Router>
                <div>
                <Header />
                <Switch>
                    <Route exact path='/' render={() => 
                    isLoggedIn() ? <Search /> : <Redirect to='/login' /> }/>
                 <Route exact path='/login' component={FavoritesLogin} setUser={ this.setUser }/>

                <PrivateRoute exact path="/" component={Search} user={this.state.user} />
                </Switch>
                <Footer />

                </div>
            </Router>
        )
    }
}