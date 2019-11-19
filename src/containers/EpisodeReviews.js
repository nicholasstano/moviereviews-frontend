import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import EpisodeReviewCard from '../components/EpisodeReviewCard'

export class EpisodeReviews extends Component {
    render() {
        return (
            <div>
                <h1>TV Episode Reviews</h1>
                <EpisodeReviewCard />
            </div>
        )
    }
}

export default withRouter(EpisodeReviews)
