import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import MovieReviewCard from '../components/MovieReviewCard'

export class MovieReviews extends Component {
    render() {
        return (
            <div>
                <h1>Movie Reviews</h1>
                <MovieReviewCard />
            </div>
        )
    }
}

export default withRouter(MovieReviews)
