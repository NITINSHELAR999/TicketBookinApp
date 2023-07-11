import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useStateValue } from './Contextapi/StateProvider.jsx'

export default function MoviInfo() {
    const [{ RecommendedMovi }] = useStateValue()
    const { id } = useParams()


    const filtermovie = RecommendedMovi.filter((item) => {
        if (item.id == id) {
            return (item)
        }
    })
    const [movie, setMovie] = useState(filtermovie)


    return (
        <div >

            <div className='infobaground w-100'>
                {

                }
                {
                    movie.map((item, i) => {

                        return (
                            <div className='d-flex' key={i}>
                                <div className="card m-5  bg-dark mx-5 shadow-lg  mb-5 rounded-5" style={{ width: "300px" }}>
                                    <img src={item.image} className="card-img-top" alt="movi" height="400px" />
                                    <p className='text-white text-center '> in Cinema</p>
                                </div>
                                <div className="card-body text-white m-5 card-p">
                                    <h1 className="card-title">{item.title}</h1>

                                    <p className="card-text">Rating : <i className="bi bi-heart-fill "></i> {item.rating}</p>
                                    <p><span style={{ fontWeight: "bold" }}>Director:</span> {item.Director}</p>
                                    <p ><span style={{ fontWeight: "bold" }}>Actor :</span> {item.actor}</p>
                                    <p className='bg-dark w-25 p-2'><span style={{ fontWeight: "bold" }}>Release date:</span> {item.release_date}</p>
                                    <p><span style={{ fontWeight: "bold" }}>Subtitle:</span> {item.subtitle}</p>
                                    <Link to={`/tikitbook/${item.id}`} className="btn btn-primary">Tikit Book</Link>

                                </div>
                            </div>

                        )
                    })
                }

            </div>

        </div>
    )
}
