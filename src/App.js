import React, { Component } from 'react';
import { 
  Route, 
  Switch,
  Redirect,
  BrowserRouter as Router, 
} from 'react-router-dom';
import Header from './Header.js';
import Favorites from './Favorites.js';
import FavoritesLogin from './FavoritesLogin.js';
import './App.css';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                <Header />
                <Switch>
                    <Route exact path='/' render={() => 
                    isLoggedIn() ? <Favorites /> : <Redirect to='/login' /> }/>
                 <Route exact path='/login' component={FavoritesLogin} />

                </Switch>

                </div>
            </Router>
        )
    }
}