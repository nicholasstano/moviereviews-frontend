import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import MovieReviews from '../src/containers/MovieReviews'
import NavBar from '../src/containers/NavBar'


export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route
            path="/moviereviews"
            render={() => {
              return (
                <div><MovieReviews /></div>
              )
            }} />
        </Switch >
      </div>
    )
  }
}

export default withRouter(App)

