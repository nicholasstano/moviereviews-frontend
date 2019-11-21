import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class MovieReviewCard extends Component {

    state = { allMovieReviews: [] }

    componentDidMount() {
        fetch(`http://localhost:3000/movies`)
            .then(res => res.json())
            .then(movies => this.setState({ allMovieReviews: movies }))
    }

    render() {
        const columns = [
            {
                Header: 'Date',
                accessor: 'date',
                minWidth: 25
            }, {
                Header: 'Title',
                accessor: 'title',
                minWidth: 45
            }, {
                Header: 'Year',
                accessor: 'year',
                minWidth: 20
            }, {
                Header: 'Director',
                accessor: 'director',
                minWidth: 40
            }, {
                Header: "Poster",
                Cell: (row) => {
                    return <div><img src={row.original.movie_img} className="images" /></div>
                },
                id: "id",
                minWidth: 30
            }, {
                Header: 'Stars',
                accessor: 'stars',
                minWidth: 10
            }, {
                Header: 'Note(un)worthy Notes',
                accessor: 'notes',
                style: { 'whiteSpace': 'unset' }
            }]

        return <ReactTable
            data={this.state.allMovieReviews}
            columns={columns}
            defaultSorted={[{ id: "id", desc: true }]}
        />
    }
}

export default MovieReviewCard
