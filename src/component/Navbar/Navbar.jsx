import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar my-2 navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <div>
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <img className="" width="40" height="32" src="https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-blank-circle-retro-logo-badges-vector-illustration-png-image_6132402.png" alt="" />
                            <svg className="bi me-2" width="40" height="32"></svg>
                            <span className="fs-4">Sprint Plans</span>
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>
                <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><Link to="/overview" className="text-decoration-none text-reset">Overview</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" > <Link to="/list" className="text-decoration-none text-reset">List</Link> </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><Link to="/board" className="text-decoration-none text-reset">Board</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><Link to="/timeline" className="text-decoration-none text-reset">Timeline</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><Link to="/calender" className="text-decoration-none text-reset">Calender</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><Link to="/dashboard" className="text-decoration-none text-reset">Dashboard</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><Link to="/messages" className="text-decoration-none text-reset">Messages</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">More...</a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-4">
                        <div className="dropdown">
                            <a href="#" className="d-block link-body-emphasis text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" /><img src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="mdo" width="32" height="32" className="rounded-circle" /><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww" alt="mdo" width="32" height="32" className="rounded-circle" /><img src="https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="mdo" width="32" height="32" className="rounded-circle" />
                            </a>
                        </div>
                        <form className="d-flex align-items-center" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        </form>
                        <img src="https://as1.ftcdn.net/v2/jpg/02/76/20/22/1000_F_276202225_6M6NkvbXpTslZZjI3vRPTgYrgFM7NGwJ.jpg" alt="mdo" width="32" height="32" className="rounded-circle" id='circle' />
                        <div class="mx-2 d-flex gap-2">
                            <button class="btn btn-outline-primary" id='new-btn' data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                            <button class="btn btn-outline-primary" id='new-btn' data-bs-toggle="modal" data-bs-target="#signupModal">Signup</button>
                        </div>
                        {/* Login Modal */}
                        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Login to your existing account</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">

                                        <div class="container my-2 d-flex flex-column justify-content-center align-items-center">
                                            <div class="col-12">
                                                <label for="inputAddress" class="form-label">Email</label>
                                                <input type="email" class="form-control" id="exampleinputEmail1"
                                                    placeholder="Enter Your Email "/>
                                                    <small id="emailHelp" class="form-text text-muted"> We'll never share your email with anyone
                                                        else.</small>
                                            </div>
                                            <div class="col-12">
                                                <br/>
                                                    <label for="inputAddress2" class="form-label">Password</label>
                                                    <input type="text" class="form-control" id="inputAddress2"
                                                        placeholder="Enter Your Password "/>
                                                        <small id="emailHelp" class="form-text text-muted"> We'll never share your password with
                                                            anyone
                                                            else.</small>
                                                    </div>
                                                    <form>
                                                    <br/>
                                                        <div class="col-12">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                                                    <label class="form-check-label" for="gridCheck">
                                                                        Check me out
                                                                    </label>
                                                            </div>
                                                            <br/>
                                                        </div>
                                                        <div class="col-12">
                                                            <button type="submit" class="btn btn-primary">Login</button>
                                                        </div>
                                                    </form>
                                            </div>


                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Sign Up Modal */}
                            <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="sighnupModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Create an new account</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">



                                            <div class="container my-2 d-flex flex-column justify-content-center align-items-center">
                                                <div class="col-12">
                                                    <label for="inputAddress" class="form-label">Name</label>
                                                    <input type="text" class="form-control" id="exampleinputEmail1"
                                                        placeholder="Enter Your Name " />
                                                </div>
                                                <div class="col-12">
                                                    <br />
                                                    <label for="inputAddress" class="form-label">Phone Number</label>
                                                    <input type="number" class="form-control" id="exampleinputEmail1"
                                                        placeholder="Enter Your Mobile Number " />
                                                </div>
                                                <div class="col-12">
                                                    <br />
                                                    <label for="inputAddress" class="form-label">Email</label>
                                                    <input type="email" class="form-control" id="exampleinputEmail1"
                                                        placeholder="Enter Your Email " />

                                                </div>
                                                <div class="col-12">
                                                    <br />
                                                    <label for="inputAddress2" class="form-label">Password</label>
                                                    <input type="password" class="form-control" id="inputAddress2"
                                                        placeholder="Enter Your Password " />

                                                </div>
                                                <div class="col-12">
                                                    <br />
                                                    <label for="cinputAddress2" class="form-label">Confirm Password</label>
                                                    <input type="password" class="form-control" id="inputAddress2"
                                                        placeholder="Enter Your Confirm Password " />
                                                </div>
                                                <form>
                                                    <br />
                                                    <div class="col-12">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                            <label class="form-check-label" for="gridCheck">
                                                                Check me out
                                                            </label>
                                                        </div>
                                                        <br />
                                                    </div>
                                                    <div class="col-12">
                                                        <button type="submit" class="btn btn-primary">Create Account</button>
                                                    </div>
                                                </form>
                                            </div>


                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </nav>
        </>
    );
}

export default Navbar;
