import React, { Component } from 'react'
import request from 'superagent';
import { withRouter } from 'react-router-dom';

export default withRouter (class FilmList extends Component {
    
    addFavorite = async (film) => {
        const fav = await request.post('https://radiant-river-59929.herokuapp.com/api/me/favorites', {
            title: film.title,
            description: film.description,
            release_year: film.release_year,
            rt_score: film.rt_score
        })
        .set('Authorization', this.props.user.token);

    }
//function that makes a function
//whenever in list and clicking item has function that needs access to that item, need function that returns function
    render() {
        return (
            <div>
                { this.props.films.map(film => 
                <div id="filmBox">
                    <h2>{film.title}</h2>
                    <h3>{film.description}</h3>
                    <h3>Release Year: {film.release_date}</h3>
                    <h3>Rotten Tomatoe Score: {film.rt_score}</h3>

                {
                    this.props.location.pathname !== '/favorites' && 
                    <button onClick={ (e) => this.addFavorite(film) }>Add Favorite</button>

                }

                </div>
                )}
            </div>
        )
    }
})
//          this.props.location.pathname !== '/favorites' && 
//  on favorties page if already a favorite dont display add fav button
