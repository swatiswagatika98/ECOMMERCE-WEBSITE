import React from 'react'
import './Tours.css'

export default function Tours() {
    const tours = [
        {
            id: 1,
            date: 'JUL16',
            place: 'DETROIT, MI',
            description: 'DTE ENERGY MUSIC THEATRE'
        },
        {
            id: 2,
            date: 'JUL19',
            place: 'TORONTO',
            description: 'ONBUDWEISER STAGE'
        },
        {
            id: 3,
            date: 'JUL 29',
            place: 'PHOENIX',
            description: 'AZAK-CHIN PAVILION'
        },
        {
            id: 4,
            date: 'AUG 2',
            place: 'LAS VEGAS',
            description: 'T-MOBILE ARENA'
        },
        {
            id: 5,
            date: 'AUG 7',
            place: 'CONCORD, CA',
            description: 'CONCORD PAVILION'
        },
        {
            id: 6,
            date: 'JUL19',
            place: 'TORONTO, CA',
            description: 'ONBUDWEISER STAGE'
        },

    ]
    return (
        <div>
            <span className='tours'>TOURS</span>
            {
                tours.map((tour, index) => (
                    <div className='tours__ticket' key={index}>
                        <span style={{width:"12%"}}>{tour.date}</span>
                        <span style={{width:"25%", color:"#777"}}>{tour.place}</span>
                        <p style={{width:"53%", color:"#777"}}>{tour.description}</p>
                        <button className='tour_ticket_btn'>BUY TICKETS</button>

                    </div>


                ))
            }
        </div>
    )
}
