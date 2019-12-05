import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import MovieReviewTable from '../components/MovieReviewTable'

export class MovieReviews extends Component {

    state = { allMovieReviews: [] }

    componentDidMount() {
        fetch(`http://localhost:3000/movies`)
            .then(res => res.json())
            .then(movies => this.setState({ allMovieReviews: movies }))
    }

    addNewMovieReview = (movie) => {
        console.log(movie.date, movie.title, movie.year, movie.director, movie.movie_img, movie.stars, movie.notes)
        this.setState({ allMovieReviews: [...this.state.allMovieReviews, movie] })
        fetch(`http://localhost:3000/movies/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                date: movie.date,
                title: movie.title,
                year: movie.year,
                director: movie.director,
                movie_img: movie.movie_img,
                stars: movie.stars,
                notes: movie.notes
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Movie Reviews</h1>
                <MovieReviewTable
                    allMovieReviews={this.state.allMovieReviews} addNewMovieReview={this.addNewMovieReview}
                />
            </div >
        )
    }
}

export default withRouter(MovieReviews)
