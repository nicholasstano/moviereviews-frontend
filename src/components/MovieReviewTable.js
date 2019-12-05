import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class MovieReviewTable extends Component {

    state = {
        date: "",
        title: "",
        year: "",
        director: "",
        stars: "",
        movie_img: "",
        notes: ""
    }

    handleMovieReviewChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleMovieReviewSubmit = event => {
        event.preventDefault()
        this.props.addNewMovieReview(this.state)
        this.setState({
            date: "",
            title: "",
            year: "",
            director: "",
            stars: "",
            movie_img: "",
            notes: ""
        })
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
                <form onSubmit={this.handleMovieReviewSubmit}>
                    <label>Date<input type="text" name="date" value={this.state.date} placeholder="12-31-1999" onChange={this.handleMovieReviewChange} />
                    </label>
                    <label>Title<input type="text" name="title" value={this.state.title} placeholder="The Pink Panther" onChange={this.handleMovieReviewChange} />
                    </label>
                    <label>Year<input type="text" name="year" value={this.state.year} placeholder="1963" onChange={this.handleMovieReviewChange} />
                    </label>
                    <label>Director<input type="text" name="director" value={this.state.director} placeholder="Blake Edwards" onChange={this.handleMovieReviewChange} />
                    </label>
                    <label>Poster<input type="text" name="movie_img" value={this.state.movie_img} placeholder="https://upload.wikimedia.org/wikipedia/en/9/96/Pink_panther63.jpg" onChange={this.handleMovieReviewChange} />
                    </label>
                    <label>Stars<input type="text" name="stars" value={this.state.stars} placeholder="333" onChange={this.handleMovieReviewChange} />
                    </label>
                    <label>Notes<input type="text" name="notes" value={this.state.notes} placeholder="notes about the viewing..." onChange={this.handleMovieReviewChange} />
                    </label>
                    {/* <label>Notes<textarea name="notes" value={this.state.notes} placeholder="Your notes for the recent viewing go here.........." onChange={this.handleMovieReviewChange} />
                    </label> */}
                    <input type="submit" value="Add Movie Review" />
                </form>
            </div><br />
            <ReactTable
                data={this.props.allMovieReviews}
                columns={columns}
                defaultSorted={[{ id: "id", desc: true }]}
            />
        </div>
    }
}

export default MovieReviewTable
