import React, { Component } from 'react'
import request from 'superagent'

export default class Favorites extends Component {
    state = {
        favorites: []
    }

    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        //get user from local storage
        const favoritesData = await request.get('https://tranquil-ridge-28699.herokuapp.com/api/films')
            .set('Authorization', user.token);
        this.setState({ favorites: favoritesData.body });
        
    }
    render() {
        return (
            <div>
                <FilmList film={this.state.favorites}/>
            </div>
        )
    }
}
