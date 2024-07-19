import React from 'react'
import img1 from "./img1.png"
import img2 from "./img2.png"
import img3 from "./img3.png"
import img4 from "./img4.png"
import img5 from "./img5.png"
import img6 from "./img6.png"
import img7 from "./img7.png"
import img8 from "./img8.png"
import img9 from "./img9.png"
import img10 from "./img10.png"
import img11 from "./img11.png"
import img12 from "./img12.png"
import Navbar from '../Navbar/Navbar'
import Second from '../Navbar/Second'
import Footer from '../Content/Footer'

function Calender() {
    return (
        <>
            <div class="row py-lg-5 p-4">
                <div class="col-lg-8 col-md-8 mx-auto">
                    <h1 class="fw-light">Calender</h1>
                    <p class="lead text-body-secondary">Short calendar slots are brief, time-specific intervals in a calendar that represent small chunks of time, often used for scheduling events, meetings, or appointments. These slots are typically shorter than standard time blocks (like 30 or 60 minutes) and can range from 5 to 15 minutes. They help in precise time management and are useful for detailed scheduling, ensuring that even brief activities are accounted for in a planner or calendar system.</p>
                    <p className='d-flex justify-content-between'>
                        <a href="#" class="btn btn-primary my-2">Book</a>
                        <a href="#" class="btn btn-success my-2">View Slots</a>
                    </p>
                </div>
            </div>
            <div className="container ">


                <div class="album py-5 bg-body-tertiary">
                    <div class="container">

                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div class="col">
                                <div class="card shadow-sm">
                                    <img src={img1} alt="" />
                                    <div class="card-body">
                                        <p> <b >Book Slot :</b> Reserve a time slot to kickstart your new year with planned events or goals.</p>
                                        <p><b>Edit Slot :</b> Modify your January schedule to adjust new year resolutions or upcoming engagements.</p>
                                        <br />
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-success">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-danger">Edit </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm">
                                    <img src={img2} alt="" />
                                    <div class="card-body">
                                        <p><b>Book Slot :</b> Secure a slot for February events or special occasions, such as Valentine's Day plans.</p>
                                        <p><b> Edit Slot :</b> Update your February calendar to reflect any changes in plans or newly added commitments.</p>
                                        <br />
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-success">View </button>
                                                <button type="button" class="btn btn-sm btn-outline-danger">Edit </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm">
                                    <img src={img3} alt="" />
                                    <div class="card-body">
                                        <p><b> Book Slot :</b> Reserve a time slot to manage tasks or events as spring approaches.</p>
                                        <p><b>Edit Slot : </b>Adjust your March schedule to accommodate changing priorities,activities.</p>
                                        <br />
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-success">View </button>
                                                <button type="button" class="btn btn-sm btn-outline-danger">Edit </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card shadow-sm">
                                    <img src={img4} alt="" />
                                    <div class="card-body">
                                        <p><b>Book Slot :</b> Book a slot for important tasks or events as the new season begins.</p>
                                        <p> <b>Edit Slot :</b> Revise your April schedule to reflect any changes in your plans or new spring events.</p>
                                        <br />
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-success">View </button>
                                                <button type="button" class="btn btn-sm btn-outline-danger">Edit </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm">
                                    <img src={img5} alt="" />
                                    <div class="card-body">
                                        <p><b>Book Slot :</b> Secure time slots for end-of-semester activities or early summer plans.</p>
                                        <p> <b>Edit Slot :</b> Update your May calendar to adjust for the transition from spring to summer.</p>
                                        <br />
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-success">View </button>
                                                <button type="button" class="btn btn-sm btn-outline-danger">Edit </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm">
                                    <img src={img6} alt="" />
                                    <div class="card-body">
                                        <p><b>Book Slot :</b> Reserve slots for summer vacations, activities, or mid-year reviews.</p>
                                        <p>  <b>Edit Slot :</b> Modify your June schedule to accommodate new summer plans or changes.</p>
                                        <br />
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-success">View </button>
                                                <button type="button" class="btn btn-sm btn-outline-danger">Edit </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card shadow-sm">
                                    <img src={img7} alt="" />
                                    <div class="card-body">
                                        <p><b>Book Slot :</b> Book time slots for summer events or vacation planning.</p>
                                        <p><b>Edit Slot :</b> Adjust your July schedule as summer progresses and new activities arise.</p>
                                        <br />
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-success">View </button>
                                                <button type="button" class="btn btn-sm btn-outline-danger">Edit </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm">
                                    <img src={img8} alt="" />
                                    <div class="card-body">
                                        <p><b>Book Slot :</b> Secure slots for back-to-school events or end-of-summer activities.</p>
                                        <p>   <b>Edit Slot :</b> Revise your August calendar to reflect the transition back to routine.</p>
                                        <br />
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-success">View </button>
                                                <button type="button" class="btn btn-sm btn-outline-danger">Edit </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm">
                                    <img src={img9} alt="" />
                                    <div class="card-body">
                                    <p><b>Book Slot :</b> Reserve time for fall events or work projects as the new season begins.</p>
                                   <p> <b>Edit Slot :</b> Update your September schedule to align with autumn plans or new commitments.</p>
                                   <br />
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-success">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-danger">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm">
                                    <img src={img10} alt="" />
                                    <div class="card-body">
                                    <p><b>Book Slot :</b> Book slots for fall events, holidays, or project deadlines.</p>
                                    <p><b>Edit Slot :</b> Modify your October calendar to reflect any changes in plans or new autumn activities.</p>
                                    <br />
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-success">View </button>
                                                <button type="button" class="btn btn-sm btn-outline-danger">Edit </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm">
                                    <img src={img11} alt="" />
                                    <div class="card-body">
                                   <p><b> Book Slot :</b> Secure time for holiday planning, end-of-year tasks, or special events.</p>
                                    <p><b>Edit Slot :</b> Adjust your November schedule to manage pre-holiday preparations reviews.</p>
                                    <br />
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-success">View </button>
                                                <button type="button" class="btn btn-sm btn-outline-danger">Edit </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm">
                                    <img src={img12} alt="" />
                                    <div class="card-body">
                                   <p><b> Book Slot :</b> Reserve time for holiday festivities, year-end wrap-ups, or special celebrations.</p>
                                    <p><b>Edit Slot :</b> Revise your December calendar to finalize year-end plans and holiday arrangements.</p>
                                    <br />
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-success">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-danger">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className='display-6 text-center mb-4'>Your Calender Schedule </h2>
                <div className='table-responsive'>
                    <table className='table text-center'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Date</th>
                                <th>Month</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-start">Public</th>
                                <td><i className="fa-solid fa-check text-success" style={{ width: '24px', height: '24px' }}></i></td>
                                <td><i className="fa-solid fa-check text-success" style={{ width: '24px', height: '24px' }}></i></td>
                                <td><i className="fa-solid fa-check text-success" style={{ width: '24px', height: '24px' }}></i></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Private</th>
                                <td><i className="fa-solid fa-xmark text-danger" style={{ width: '24px', height: '24px' }}></i></td>
                                <td><i className="fa-solid fa-check text-success" style={{ width: '24px', height: '24px' }}></i></td>
                                <td><i className="fa-solid fa-check text-success" style={{ width: '24px', height: '24px' }}></i></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Permissions</th>
                                <td><i className="fa-solid fa-check text-success" style={{ width: '24px', height: '24px' }}></i></td>
                                <td><i className="fa-solid fa-check text-success" style={{ width: '24px', height: '24px' }}></i></td>
                                <td><i className="fa-solid fa-check text-success" style={{ width: '24px', height: '24px' }}></i></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Sharing</th>
                                <td><i className="fa-solid fa-xmark text-danger" style={{ width: '24px', height: '24px' }}></i></td>
                                <td><i className="fa-solid fa-check text-success" style={{ width: '24px', height: '24px' }}></i></td>
                                <td><i className="fa-solid fa-check text-success" style={{ width: '24px', height: '24px' }}></i></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Unlimited members</th>
                                <td><i className="fa-solid fa-xmark text-danger" style={{ width: '24px', height: '24px' }}></i></td>
                                <td><i className="fa-solid fa-check text-success" style={{ width: '24px', height: '24px' }}></i></td>
                                <td><i className="fa-solid fa-check text-success" style={{ width: '24px', height: '24px' }}></i></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Extra security</th>
                                <td><i className="fa-solid fa-xmark text-danger" style={{ width: '24px', height: '24px' }}></i></td>
                                <td><i className="fa-solid fa-xmark text-danger" style={{ width: '24px', height: '24px' }}></i></td>
                                <td><i className="fa-solid fa-check text-success" style={{ width: '24px', height: '24px' }}></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>            </div>

        </>
    )
}

export default Calender
