import React, { Component } from 'react'

export class EpisodeReviewCard extends Component {
    render() {
        return (
            <div>
                <div className="episodeReviewCard">
                    <p>Date of viewing</p>
                    <p>episode title</p>
                    <p>show</p>
                    <p>Season # and Episode #</p>
                    <p>poster</p>
                    <p>1/2/3/4/5 stars</p>
                    <p>My thoughts on this viewing</p>
                </div>
                <div className="episodeReviewCard">
                    <p>11/18/2019</p>
                    <p>Tennis the Menace</p>
                    <p>The Simpsons</p>
                    <p>12.12</p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/1/1d/The_Simpsons_-_The_12th_Season.jpg" alt="season 12 poster" />
                    <p>3</p>
                    <p>The cameo's at the end are great and Lisa and Homer therapy and the mention of Oedipus. The episode definitely takes a turn after opening with Grandpa and looking at Casket's or places to bury the old man.  Homer takes his $17,000 and drops it on a tennis court but really thought he was buying a Foxy Boxing Ring. Bizarre.</p>
                </div>
            </div >
        )
    }
}

export default EpisodeReviewCard
