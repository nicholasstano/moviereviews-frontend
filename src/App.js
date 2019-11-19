import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import MovieReviews from '../src/containers/MovieReviews'
import NavBar from '../src/containers/NavBar'
import Home from '../src/containers/Home'
import EpisodeReviews from '../src/containers/EpisodeReviews'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route
            path="/home"
            render={() => {
              return (
                <div><Home /></div>
              )
            }} />
          <Route
            path="/moviereviews"
            render={() => {
              return (
                <div><MovieReviews /></div>
              )
            }} />
          <Route
            path="/episodereviews"
            render={() => {
              return (
                <div><EpisodeReviews /></div>
              )
            }} />
        </Switch >
      </div>
    )
  }
}

export default withRouter(App)

