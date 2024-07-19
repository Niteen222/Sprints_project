import React from 'react'
import Navbar from '../Navbar/Navbar'
import Second from '../Navbar/Second'
import Footer from '../Content/Footer'

function Overview() {
    return (
        <>
        <Navbar/>
        <Second/>
            <div className="container mt-5">
                <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                    <div class="col-lg-6 px-0">
                        <h1 class="display-4 fst-italic">Welcome here</h1>
                        <p class="lead my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nisi quasi, ut similique voluptatem nobis delectus corrupti repudiandae ipsa explicabo, modi, dolores eaque repellat laborum libero aut? Velit veniam minima ullam error culpa blanditiis.
                        </p>
                        <p class="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Overviews</a></p>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary-emphasis">Our Overviews</strong>
                                <h3 class="mb-0">Ajay Kumar's overview</h3>
                                <div class="mb-1 text-body-secondary">Nov 12</div>
                                <br />
                                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <br />
                                <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                                    View
                                    <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
                                </a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <img className='p-0 p-3' width="220" height="220" src="https://imgscf.slidemembers.com/docs/1/1/454/knowing_the_problem_ppt_slide_453205.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-success-emphasis">Our Overviews</strong>
                                <h3 class="mb-0">Aman's overview</h3>
                                <div class="mb-1 text-body-secondary">Nov 23</div>
                                <br />
                                <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <br />
                                <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                                    View
                                </a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <img className='p-0 p-3' width="220" height="220" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrPfe9dr0NnUcjMLU07qrMsN1j-l5nGSXrWX6Pzway-I-w7b9hkWapUG2M0af84D45qo&usqp=CAU" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary-emphasis">Our Overviews</strong>
                                <h3 class="mb-0">Balram Kumar's overview</h3>
                                <div class="mb-1 text-body-secondary">Dec 12</div>
                                <br />
                                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <br />
                                <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                                    View
                                    <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
                                </a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <img className='p-0 p-3' width="220" height="220" src="https://imgscf.slidemembers.com/docs/1/1/612/company_overview_page_611160.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-success-emphasis">Our Overviews</strong>
                                <h3 class="mb-0">Sandeep's overview</h3>
                                <div class="mb-1 text-body-secondary">Dec 28</div>
                                <br />
                                <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <br />
                                <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                                    View
                                </a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <img className='p-0 p-3' width="220" height="220" src="https://imgscf.slidemembers.com/docs/1/1/612/company_overview_page_611162.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Overview
