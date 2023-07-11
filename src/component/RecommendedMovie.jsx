import React from 'react'
import { Link } from "react-router-dom"
export default function RecommendedMovie({ id, title, release_date, image, Director, rating, subtitle, actor }) {
  return (
    <div class="col-sm-4">
    <div className="card bg-dark text-white mx-5 shadow-lg p-3 mb-5 rounded" style={{ width: "18rem" }} key={id}>
      <div className='m-1'>Release Date    {release_date}</div>
      <img src={image} className="card-img-top " alt="..." height="205rem" />
      <div className="card-body">
        <h5 className="card-title">{title} ({subtitle})</h5>
        <p className="card-text mx-2">rating:<span className="card-text mx-2">{rating}</span> <span><i className="bi bi-heart"></i></span> </p>

      </div>
      <Link to={`/moviinfo/${id}`} className="btn btn-primary ">Ticket Booking</Link>

    </div>
    </div>
  )
}
