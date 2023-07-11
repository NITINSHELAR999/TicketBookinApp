import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStateValue } from './Contextapi/StateProvider.jsx'

export default function TikitBook() {
  const navigate = useNavigate()
  const [{ RecommendedMovi, user }, dispatch] = useStateValue()


  const { id } = useParams()


  const filtermovie = RecommendedMovi.filter((item) => {
    if (item.id == id) {
      return (item)
    }
  })
  const [movie, setMovie] = useState(filtermovie)

  const movieid = movie[0].id

  const seatBook = (time, theterid) => {
    dispatch({
      type: "ADD_SELECT_TIME_AND_THETER",
      Showdetais: {
        time: time
      }
    })
    navigate("/seatbook")


  }


  return (
    <div>

      <div className="container position-relative ">
        <h2>{movie[0].title}</h2>
        <hr />
        {
          movie[0].Theater.map((item, i) => {

            return (

              <div className="row" key={i}>

                <div className="col-4"> <div className="card-header  ">
                  <h1>{item.tname}:</h1>
                  <h5 className='m-3'>( {item.address} )</h5>
                  <p className="card-title mx-2">rating:<span className="card-text mx-2">{item.rating}</span>  </p>
                  <span><i className="bi bi-heart mx-2" ></i> <span className='text-success'>{item.like}</span></span>

                </div></div>
                <div className="col-8">
                  <div className="card-body">
                    {
                      item.show.map((ele, i) => {

                        return (<h5 className='btn btn-outline-success mx-5 p-3 px-5 ' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => seatBook(ele, item.tid)} >{ele.time}</h5>)

                      })
                    }



                  </div>
                </div>
              </div>
            )
          })
        }

      </div>







    </div>
  )
}

