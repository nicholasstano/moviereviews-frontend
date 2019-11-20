import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class EpisodeReviewCard extends Component {
    render() {
        const data = [{
            date: '11/18/2019',
            episode_name: "Tennis the Menace",
            show_name: "The Simpsons",
            season_episode_num: 12.12,
            season_img: <img src="https://upload.wikimedia.org/wikipedia/en/1/1d/The_Simpsons_-_The_12th_Season.jpg" alt="season 12 poster" className="images" />,
            stars: 3,
            notes: "Tennis greats have cameo at end. Bart as Oedipus with Homer's head on the wall. Lisa as Homer's therapist."
        }]

        const columns = [
            {
                Header: 'Date',
                accessor: 'date',
                minWidth: 50
            }, {
                Header: 'Episode Name',
                accessor: 'episode_name',
                minWidth: 60
            }, {
                Header: 'Show Name',
                accessor: 'show_name',
                minWidth: 50
            }, {
                Header: 'Season and Episode Number',
                accessor: 'season_episode_num',
                minWidth: 40
            }, {
                Header: 'Poster',
                accessor: 'season_img',
                minWidth: 30
            }, {
                Header: 'Stars',
                accessor: 'stars',
                minWidth: 30
            }, {
                Header: 'Note(un)worthy Notes',
                accessor: 'notes',
                style: { 'whiteSpace': 'unset' }
            }]
        //             Header: 'Age',
        //             accessor: 'age',
        //             Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        //         }, {
        //     id: 'friendName', // Required because our accessor is not a string
        //         Header: 'Friend Name',
        //             accessor: d => d.friend.name // Custom value accessors!
        // }, {
        //     Header: props => <span>Friend Age</span> , // Custom header components!
        //         accessor: 'friend.age'
        // }]

        return <ReactTable
            data={data}
            columns={columns}
        />
    }
}
//         return (
//             <div>

//                 <div className="episodeReviewCard">
//                     <p>11/19/2019</p>
//                     <p>Day of the Jackanapes</p>
//                     <p>The Simpsons</p>
//                     <p>12.13</p>
//                     <p><img src="https://upload.wikimedia.org/wikipedia/en/1/1d/The_Simpsons_-_The_12th_Season.jpg" alt="season 12 poster" /></p>
//                     <p>3</p>
//                     <p>Sideshow Bob is back.</p>
//                 </div>
//             </div >
//         )
//     }
// }

export default EpisodeReviewCard
