import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class MovieReviewTable extends Component {

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

        return <div>
            <div className="movie-add-form">
                <form>
                    <label>Date<input type="text" name="date" placeholder="12-31-1999" />
                    </label>
                    <label>Title<input type="text" name="title" placeholder="The Pink Panther" />
                    </label>
                    <label>Year<input type="text" name="year" placeholder="1963" />
                    </label>
                    <label>Director<input type="text" name="director" placeholder="Blake Edwards" />
                    </label>
                    <label>Stars<input type="text" name="stars" placeholder="333" />
                    </label>
                    <label>Poster<input type="text" name="poster" placeholder="https://upload.wikimedia.org/wikipedia/en/9/96/Pink_panther63.jpg" />
                    </label>
                    <label>Notes<textarea name="notes" placeholder="Your notes for the recent viewing go here.........." />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div><br />
            <ReactTable
                data={this.state.allMovieReviews}
                columns={columns}
                defaultSorted={[{ id: "id", desc: true }]}
            />
        </div>
    }
}

export default MovieReviewTable
