import React, { Component } from 'react'

export class MovieReviewCard extends Component {
    render() {
        return (
            <div>
                <p>A Colt Is My Passport (1967)</p>
                <p>Director: Takashi Nomura</p>
                <img src="https://upload.wikimedia.org/wikipedia/en/2/27/A_Colt_Is_My_Passport_poster.jpg" alt="A Colt Is My Passport" />
                <p>Rating: 4/5</p>
                <p>Review: </p>
            </div>
        )
    }
}

export default MovieReviewCard
