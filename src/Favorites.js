import React, { Component } from 'react'
import request from 'superagent'
import FilmList from './FilmList.js';

export default class Favorites extends Component {
    state = {
        favorites: []
    }

    async componentDidMount() {
        // const user = JSON.parse(localStorage.getItem('user'));
        //get user from local storage
        const favoritesData = await request.get('https://radiant-river-59929.herokuapp.com/api/me/favorites')
            .set('Authorization', this.props.user.token);
        this.setState({ favorites: favoritesData.body });
        
    }
    handleFavorite = async () => {
        
        this.setState({favorites: this.state.favorites})
        
    }
    render() {
        return (
            <div>
                <FilmList favorites={this.state.favorites}/>
            </div>
        )
    }
}
