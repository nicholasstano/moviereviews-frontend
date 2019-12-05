import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <Link className="" to="/Home">Home</Link>
                <Link className="" to="/moviereviews">Movie Reviews</Link>
                <Link className="" to="/episodereviews">Episode Reviews</Link>
                <Link className="" to="/actors">Actors</Link>
            </div>
        )
    }
}

export default NavBar
