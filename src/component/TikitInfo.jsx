import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { useStateValue } from './Contextapi/StateProvider.jsx'

export default function TikitInfo() {
    const navigat = useNavigate()
    const [{ tikitInformation }, dispatch] = useStateValue()
    console.log(tikitInformation, "info")
    const Conform = () => {

        dispatch({
            type: "SEAT_COMFORM",

            seatUpdat: tikitInformation.seatUpdat,
            Moviedetail: tikitInformation.Moviedetail

        })
        alert("Comform Your Tikit")
        navigat("/")
    }
    const Cancel = () => {
        
        navigat("/")
    }

    return (
        <div className='container'>

            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Seat No</th>
                        <th scope="col">Price</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        tikitInformation.userTikit.map((ele, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{ele.seatNo}</td>
                                    <td>{ele.price}</td>

                                </tr>
                            )
                        })

                    }
                    <tr>
                        <td></td>
                        <td><h3>Total</h3></td>
                        <td>
                           <h5>{tikitInformation.userTikit.reduce((amount, item) => item.price + amount, 0)}</h5> 
                        </td>

                    </tr>

                </tbody>
            </table>

            <div>
                <button type="button" class="btn btn-outline-success mx-5" onClick={Conform}>comform</button>
                <button type="button" class="btn btn-outline-danger" onClick={Cancel}>Cancel</button>
            </div>
        </div>
    )
}
