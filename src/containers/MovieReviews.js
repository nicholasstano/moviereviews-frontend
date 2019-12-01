import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import MovieReviewTable from '../components/MovieReviewTable'

export class MovieReviews extends Component {
    render() {
        return (
            <div>
                <h1>Movie Reviews</h1>
                <MovieReviewTable />
            </div>
        )
    }
}

export default withRouter(MovieReviews)
