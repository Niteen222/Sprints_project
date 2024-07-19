import React from 'react'
import "./list.css"
import Navbar from '../Navbar/Navbar'
import Second from '../Navbar/Second'
import Footer from '../Content/Footer'

function List() {
    return (
        <>
            <Navbar />
            <Second />
            <main class="container">
                <div class="d-flex align-items-center p-3 my-3 text-black bg-purple rounded shadow-sm justify-content-between">
                    <div className='d-flex gap-3 align-items-center'>
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305" height={45} alt="" />
                        <div class="lh-1">
                            <h1 class="h6 mb-0 text-black lh-1">Sprint Plans</h1>
                            <small>Since 2015</small>
                        </div>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <button type="button" class="btn btn-warning btn-sm">
                            Logout
                        </button>

                    </div>
                </div>

                <div class="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 class="border-bottom pb-2 mb-0">Friends</h6>
                    <div class="d-flex text-body-secondary pt-3 align-items-center justify-content-between border-bottom">
                        <div className='d-flex text-body-secondary pt-3 '>
                            <img src="https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="42" height="42" alt="" />
                            <p class="pb-3 mb-0 small lh-sm">
                                <strong class="d-block text-gray-dark">ramkumar012</strong>
                                Joined 2017
                            </p>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary btn-sm">
                            Massage
                        </button>

                    </div>
                    <div class="d-flex text-body-secondary pt-3 align-items-center justify-content-between border-bottom">
                        <div className='d-flex text-body-secondary pt-3'>
                            <img src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="42" height="42" alt="" />
                            <p class="pb-3 mb-0 small lh-sm">
                                <strong class="d-block text-gray-dark">naveenkumar02</strong>
                                Joined 2014
                            </p>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary btn-sm">
                            Massage
                        </button>

                    </div>
                    <div class="d-flex text-body-secondary pt-3 align-items-center justify-content-between border-bottom">
                        <div className='d-flex text-body-secondary pt-3'>
                            <img src="https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="42" height="42" alt="" />
                            <p class="pb-3 mb-0 small lh-sm">
                                <strong class="d-block text-gray-dark">aathiya__02</strong>
                                Joined 2011
                            </p>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary btn-sm">
                            Massage
                        </button>

                    </div>
                    <div class="d-flex text-body-secondary pt-3 align-items-center justify-content-between border-bottom">
                        <div className='d-flex text-body-secondary pt-3'>
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="42" height="42" alt="" />
                            <p class="pb-3 mb-0 small lh-sm">
                                <strong class="d-block text-gray-dark">varunram02</strong>
                                Joined 2019
                            </p>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary btn-sm">
                            Massage
                        </button>

                    </div>
                    <div class="d-flex text-body-secondary pt-3 align-items-center justify-content-between border-bottom">
                        <div className='d-flex text-body-secondary pt-3'>
                            <img src="https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="42" height="42" alt="" />
                            <p class="pb-3 mb-0 small lh-sm">
                                <strong class="d-block text-gray-dark">anil__1__0</strong>
                                Joined 2015
                            </p>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary btn-sm">
                            Massage
                        </button>

                    </div>
                    <div class="d-flex text-body-secondary pt-3 align-items-center justify-content-between border-bottom">
                        <div className='d-flex text-body-secondary pt-3'>
                            <img src="https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="42" height="42" alt="" />
                            <p class="pb-3 mb-0 small lh-sm">
                                <strong class="d-block text-gray-dark">rahulkumar</strong>
                                Joined 2015
                            </p>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary btn-sm">
                            Massage
                        </button>

                    </div>
                    <div class="d-flex text-body-secondary pt-3 align-items-center justify-content-between border-bottom">
                        <div className='d-flex text-body-secondary pt-3'>
                            <img src="https://images.unsplash.com/photo-1533636721434-0e2d61030955?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="42" height="42" alt="" />
                            <p class="pb-3 mb-0 small lh-sm">
                                <strong class="d-block text-gray-dark">akash__10</strong>
                                Joined 2015
                            </p>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary btn-sm">
                            Massage
                        </button>

                    </div>
                    <small class="d-block text-end mt-3">
                        <a href="#">All updates</a>
                    </small>
                </div>

                <div class="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 class="border-bottom pb-2 mb-0">Friend Suggestions</h6>
                    <div class="d-flex text-body-secondary pt-3 align-items-center justify-content-between border-bottom">
                        <div className='d-flex text-body-secondary pt-3'>
                            <img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="42" height="42" alt="" />
                            <p class="pb-3 mb-0 small lh-sm">
                                <strong class="d-block text-gray-dark">samar__10</strong>
                                Joined 2015
                            </p>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary btn-sm">
                            Follow
                        </button>

                    </div>

                    <div class="d-flex text-body-secondary pt-3 align-items-center justify-content-between border-bottom">
                        <div className='d-flex text-body-secondary pt-3'>
                            <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="42" height="42" alt="" />
                            <p class="pb-3 mb-0 small lh-sm">
                                <strong class="d-block text-gray-dark">ravi__11</strong>
                                Joined 2016
                            </p>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary btn-sm">
                            Follow
                        </button>

                    </div>
                    <div class="d-flex text-body-secondary pt-3 align-items-center justify-content-between border-bottom">
                        <div className='d-flex text-body-secondary pt-3'>
                            <img src="https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="42" height="42" alt="" />
                            <p class="pb-3 mb-0 small lh-sm">
                                <strong class="d-block text-gray-dark">raj__19</strong>
                                Joined 2022
                            </p>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary btn-sm">
                            Follow
                        </button>

                    </div>
                    <div class="d-flex text-body-secondary pt-3 align-items-center justify-content-between border-bottom">
                        <div className='d-flex text-body-secondary pt-3'>
                            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="42" height="42" alt="" />
                            <p class="pb-3 mb-0 small lh-sm">
                                <strong class="d-block text-gray-dark">shubhu__02</strong>
                                Joined 2012
                            </p>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary btn-sm">
                            Follow
                        </button>

                    </div>
                    <div class="d-flex text-body-secondary pt-3 align-items-center justify-content-between border-bottom">
                        <div className='d-flex text-body-secondary pt-3'>
                            <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="42" height="42" alt="" />
                            <p class="pb-3 mb-0 small lh-sm">
                                <strong class="d-block text-gray-dark">aneeshkhan__2</strong>
                                Joined 2014
                            </p>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary btn-sm">
                            Follow
                        </button>

                    </div>
                    <div class="d-flex text-body-secondary pt-3 align-items-center justify-content-between border-bottom">
                        <div className='d-flex text-body-secondary pt-3'>
                            <img src="https://images.unsplash.com/photo-1596075780750-81249df16d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="42" height="42" alt="" />
                            <p class="pb-3 mb-0 small lh-sm">
                                <strong class="d-block text-gray-dark">akhil12</strong>
                                Joined 2013
                            </p>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary btn-sm">
                            Follow
                        </button>

                    </div>
                    <div class="d-flex text-body-secondary pt-3 align-items-center justify-content-between border-bottom">
                        <div className='d-flex text-body-secondary pt-3'>
                            <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="42" height="42" alt="" />
                            <p class="pb-3 mb-0 small lh-sm">
                                <strong class="d-block text-gray-dark">shivani__12__</strong>
                                Joined 2023
                            </p>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary btn-sm">
                            Follow
                        </button>

                    </div>
                    <small class="d-block text-end mt-3">
                        <a href="#">All suggestions</a>
                    </small>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default List
