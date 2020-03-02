import React, { Component } from 'react'
import request from 'superagent'
import FilmList from './FilmList.js';

export default class Search extends Component {
    state = {
        films: [],
        favorites: [],
        input: ''
    }
    async componentDidMount() {
        const favoritesData = await request.get('https://radiant-river-59929.herokuapp.com/api/me/favorites')
            .set('Authorization', this.props.user.token);
        this.setState({ favorites: favoritesData.body });
        
    }
    handleSearch = async (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })
        const filmsData = await request.get(`https://radiant-river-59929.herokuapp.com/api/films?title=${this.state.input}`);

        this.setState({ 
            films: filmsData.body,
            loading: false
        })
    }
    

    render() {
        return (
            <div id="search">
                <h2>You must search for exact movie title and case sensitive.</h2>
                <form onSubmit= { this.handleSearch }>
                <input value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />

                <button onClick={this.handleSearch}>Search</button>

                {/* { loading ? 'loading' : } */}

                <FilmList films={this.state.films} user={ this.props.user }/>
                </form>
            </div>
        )
    }
}
