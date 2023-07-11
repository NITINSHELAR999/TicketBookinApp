import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from './Contextapi/StateProvider.jsx'

export default function SeatBook() {
  const navigat = useNavigate()
  const [{ showtime, RecommendedMovi }, dispatch] = useStateValue()
  const [Booked, setBooked] = useState([])



  const Film = RecommendedMovi.filter((ele) => {     
    if (ele.id == showtime.time.filmid) {
      return (ele)
    }

  }

  )


  const Theter = Film[0].Theater.filter((ele) => {
    if (ele.tid == showtime.time.theterid) {
      return (ele)
    }

  }

  )

  const ShowTime = Theter[0].show.filter((ele) => {
    if (ele.time == showtime.time.time) {


      return (ele)
    }

  }
  )
 
  const [seatsdata, setSeatsdata] = useState(ShowTime[0].seat)

  useEffect(() => {

  }, [seatsdata])

  //select seats
  const seatbooked = (seat) => {

    setSeatsdata(seatsdata.map((data) => {  

      if (data.seatNo == seat) {
        
        if (data.select == true) {
          data.select = false;

        } else {
          data.select = true


        }

      }
      return data
    }))
  }


  ///
  const seatbooking = () => {
    seatsdata.map((data) => {

      if (data.select == true) {

        Booked.push(data)
        if (data.seatStatus == false) {
          data.seatStatus = true

        }


      }
    })



    dispatch({
      type: "TIKIT_INFORMATION",
      Tinfo: {
        seatUpdat: seatsdata,
        Moviedetail: ShowTime[0],
        userTikit: Booked
      }

    })

    navigat("/tikitinfo")

  }

  return (
    <div>

      {
        Film.map((ele) => {
          return (<>
            <center>
              <div class="card mb-3 " style={{ maxWidth: "70rem" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={ele.image} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{ele.title}</h5>
                      <p class="card-text">{ele.actor}</p>
                      <p class="card-text"><small class="text-muted">{ele.release_date}</small></p>

                    </div>
                    {
                      Theter.map((item) => {
                        return <div class="card text-dark bg-light mb-3" style={{ maxWidth: "35rem" }}>
                          <div class="card-header"><h2>Theater:{item.tname}</h2></div>
                          <div class="card-body">
                            <h5 class="card-title">{item.address}</h5>
                            <p class="card-text">Theter Rating : {item.rating}</p>
                          </div>
                        </div>
                      })
                    }
                    <div>
                      {
                        ShowTime.map((show) => {
                          return (
                            <div class="card border-primary mb-3" style={{ maxWidth: "35rem" }}>
                              <div class="card-header"><h2>{show.time}</h2></div></div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </center>

          </>


          )
        })

      }
      <hr />
      <div className='container'>
        <div className='row'>
          <div className=''>
            <center><div class="card border-primary mb-3" style={{ maxWidth: "35rem" }}>
              <div class="card-header"><span className='btn btn-secondary'></span> alerdy book <span className='btn btn-success'></span>selected <span className='btn btn-outline-success disabled'></span> unselected</div></div></center>
            {
              seatsdata.map((seats, i) => {
                return (
                  <button type="button" className={`btn  mx-3 mt-3 ${seats.select == true ? "active" : null} ${seats.seatStatus == true ? "disabled btn-secondary" : "btn-outline-success"}`} key={i} onClick={() => seatbooked(seats.seatNo)}>{seats.seatNo}</button>)


              })
            }
          </div>
          <button className="btn btn-success w-25 mt-5" onClick={seatbooking}>book Tikit</button>
        </div></div>
    </div>

  )
}
