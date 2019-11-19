import React, { Component } from 'react'

export class MovieReviewCard extends Component {
    render() {
        return (
            <div>
                <div className="movieReviewCard">
                    <p>Date of viewing</p>
                    <p>title</p>
                    <p>year</p>
                    <p>director</p>
                    <p>poster</p>
                    <p>1/2/3/4/5 stars</p>
                    <p>My thoughts on this viewing</p>
                </div>
                <div className="movieReviewCard">
                    <p>11/17/2019</p>
                    <p>A Colt Is My Passport</p>
                    <p>1967</p>
                    <p>Takashi Nomura</p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/2/27/A_Colt_Is_My_Passport_poster.jpg" alt="A Colt Is My Passport" />
                    <p>4 stars</p>
                    <p>A brilliant Noir / Western combination. Director Takashi Nomura pulls from Sergio Leone's Man With No Name Trilogy. Lead actor Joe Shishido pulls from Clint Eastwood but might say more.  Awesome showdown at the end up there with the sequences in Yojimbo, A Fistful of Dollars, and The Good, The Bad & the Ugly.</p>
                </div>
                <div className="movieReviewCard">
                    <p>11/03/2019</p>
                    <p>The Dark Knight Rises</p>
                    <p>2012</p>
                    <p>Christopher Nolan</p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg" alt="The Dark Knight Rises" />
                    <p>4 stars</p>
                    <p>The movie where Christian Bale does the best job in his role in my opinion.  Selina Kyle and her motives add fun storylines. Despite being the last movie of the trilogy it feels different than Dark Knight and Batman Begins. JGL and his friendship with Chris Nolan got him plenty of screen time and he does a good job in the role but I don't enjoy how different James Gordon feels. Obviously he went through a lot in the last movie with his family but it feels forced at times.</p>
                </div>
            </div>
        )
    }
}

export default MovieReviewCard
