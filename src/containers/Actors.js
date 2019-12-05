import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export class Actors extends Component {

    state = { actors: [], name: "", age: "" }

    componentDidMount() {
        fetch(`http://localhost:3000/actors`)
            .then(res => res.json())
            .then(actors => this.setState({ actors: actors }))
    }

    handleActorChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleActorSubmit = event => {
        event.preventDefault()
        this.addActor(this.state)
        this.setState({
            name: "",
            age: ""
        })
    }

    addActor = (actor) => {
        console.log(actor)
        this.setState({ actors: [...this.state.actors, actor] })
        fetch(`http://localhost:3000/actors/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                name: actor.name,
                age: actor.age
            })
        })
    }

    render() {
        return (
            <div className="">
                {this.state.actors.length > 0 ? this.state.actors.map(actor => <h1>{actor.name} is {actor.age} years old</h1>) : <h1>Loading</h1>}
                <form onSubmit={this.handleActorSubmit}>
                    <label>Name<input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleActorChange} />
                    </label>
                    <label>Title<input type="text" name="age" value={this.state.age} placeholder="Age" onChange={this.handleActorChange} />
                    </label>
                    <input type="submit" value="Add Actor" />
                </form>
            </div>
        )
    }
}

export default withRouter(Actors)
