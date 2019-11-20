import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class MovieReviewCard extends Component {
    render() {
        const data = [{
            date: '11/17/2019',
            title: "A Colt Is My Passport",
            year: 1967,
            director: "Takashi Nomura",
            movie_img: <img src="https://upload.wikimedia.org/wikipedia/en/2/27/A_Colt_Is_My_Passport_poster.jpg" alt="A Colt Is My Passport" className="images" />,
            stars: '****',
            notes: "A brilliant Noir / Western combination. Director Takashi Nomura pulls from Sergio Leone's Man With No Name Trilogy. Lead actor Joe Shishido pulls from Clint Eastwood but might say more.  Awesome showdown at the end up there with the sequences in Yojimbo, A Fistful of Dollars, and The Good, The Bad & the Ugly."
        }]

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
                Header: 'Poster',
                accessor: 'movie_img',
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

//     render() {
//         return (
//             <div>
//                 <div className="movieReviewCard">
//                     <p>Date of viewing</p>
//                     <p>title</p>
//                     <p>year</p>
//                     <p>director</p>
//                     <p>poster</p>
//                     <p>1/2/3/4/5 stars</p>
//                     <p>My thoughts on this viewing</p>
//                 </div>
//                 <div className="movieReviewCard">
//                     <p>11/17/2019</p>
//                     <p>A Colt Is My Passport</p>
//                     <p>1967</p>
//                     <p>Takashi Nomura</p>
//                     <img src="https://upload.wikimedia.org/wikipedia/en/2/27/A_Colt_Is_My_Passport_poster.jpg" alt="A Colt Is My Passport" />
//                     <p>4 stars</p>
//                     <p>A brilliant Noir / Western combination. Director Takashi Nomura pulls from Sergio Leone's Man With No Name Trilogy. Lead actor Joe Shishido pulls from Clint Eastwood but might say more.  Awesome showdown at the end up there with the sequences in Yojimbo, A Fistful of Dollars, and The Good, The Bad & the Ugly.</p>
//                 </div>
//                 <div className="movieReviewCard">
//                     <p>11/03/2019</p>
//                     <p>The Dark Knight Rises</p>
//                     <p>2012</p>
//                     <p>Christopher Nolan</p>
//                     <img src="https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg" alt="The Dark Knight Rises" />
//                     <p>4 stars</p>
//                     <p>The movie where Christian Bale does the best job in his role in my opinion.  Selina Kyle and her motives add fun storylines. Despite being the last movie of the trilogy it feels different than Dark Knight and Batman Begins. JGL and his friendship with Chris Nolan got him plenty of screen time and he does a good job in the role but I don't enjoy how different James Gordon feels. Obviously he went through a lot in the last movie with his family but it feels forced at times.</p>
//                 </div>
//             </div>
//         )
//     }
// }

export default MovieReviewCard
