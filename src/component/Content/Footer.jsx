import React from 'react'

function Footer() {
    return (
        <div className='container'>
            <hr />
            <div class="p-0 p-5">
                <footer class="py-5">
                    <div class="d-flex flex-wrap gap-5">
                        <div class="col-6 col-md-2 mb-3">
                            <h5>Our Features</h5>
                            <ul class="nav flex-column" style={{ fontSize: '20px' }}>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">All Tasks</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Filter</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Rules</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Fields</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">List</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3" style={{ fontSize: '20px' }}>
                            <h5>Sections</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Overview</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Board</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Timeline</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Calender</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Dashboard</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Massages</a></li>
                            </ul>
                        </div>

                        <div class="col-md-5 offset-md-1 mb-3" style={{ fontSize: '20px' }}>
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input style={{ fontSize: '20px' }} id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                    <button class="btn btn-primary" type="button">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top" style={{ fontSize: '20px' }}>
                        <div className='d-flex justify-content-center'>
                            <p className='center'>© 2024 Company, Inc. All rights reserved.</p>
                        </div>
                        <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-facebook"></i></a></li>
                        </ul>
                    </div>
                    <div className="container d-flex justify-content-center">
                        <p class="mb-0">
                            <a href="#">Back to top</a>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
