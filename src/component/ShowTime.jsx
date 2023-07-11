import React from 'react'
import { Link } from 'react-router-dom'
export default function ShowTime({ ele, i }) {
    return (
        <div >
            <Link to={`/seatbook/${ele}`} key={i}>
                <h5 className='btn btn-outline-success mx-5 p-3 px-5'
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                >
                    {ele.time}

                </h5>
            </Link>

        </div>
    )
}
