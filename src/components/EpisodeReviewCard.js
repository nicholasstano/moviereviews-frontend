import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class EpisodeReviewCard extends Component {

    state = { allEpisodeReviews: [] }

    componentDidMount() {
        fetch(`http://localhost:3000/episodes`)
            .then(res => res.json())
            .then(episodes => this.setState({ allEpisodeReviews: episodes }))
    }

    render() {
        const columns = [
            {
                Header: 'Date',
                accessor: 'date',
                minWidth: 20
            }, {
                Header: 'Episode',
                accessor: 'episode_name',
                minWidth: 30
            }, {
                Header: 'Show',
                accessor: 'show_name',
                minWidth: 20
            }, {
                Header: 'Season & Episode Number',
                accessor: 'season_episode_num',
                minWidth: 40
            }, {
                Header: "Poster",
                Cell: (row) => {
                    return <div><img src={row.original.season_img} className="images" /></div>
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
            data={this.state.allEpisodeReviews}
            columns={columns}
            defaultSorted={[{ id: "id", desc: true }]}
        />
    }

}

export default EpisodeReviewCard
