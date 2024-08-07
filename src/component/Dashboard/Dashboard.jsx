import React from 'react'
import "./Dasboard.css"
import Navbar from '../Navbar/Navbar'
import Second from '../Navbar/Second'
import Footer from '../Content/Footer'
import img from './image.png'

function Dashboard() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                        <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                                            <i class="fa-solid fa-house"></i>    Dashboard
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="#">

                                            <i class="fa-solid fa-file"></i>  Orders
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="#">

                                            <i class="fa-solid fa-cart-shopping"></i>   Products
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="#">

                                            <i class="fa-solid fa-user-group"></i>   Customers
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="#">

                                            <i class="fa-solid fa-chart-line"></i>    Reports
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="#">

                                            <i class="fa-brands fa-intercom"></i>    Integrations
                                        </a>
                                    </li>
                                </ul>

                                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                                    <span>Saved reports</span>
                                    <a class="link-secondary" href="#" aria-label="Add a new report">

                                    </a>
                                </h6>
                                <ul class="nav flex-column mb-auto">
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="#">

                                            <i class="fa-regular fa-file-lines"></i>   Current month
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="#">

                                            <i class="fa-regular fa-file-lines"></i>   Last quarter
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="#">

                                            <i class="fa-regular fa-file-lines"></i>   Social engagement
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="#">

                                            <i class="fa-regular fa-file-lines"></i>    Year-end sale
                                        </a>
                                    </li>
                                </ul>

                                <hr class="my-3" />

                                <ul class="nav flex-column mb-auto">
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="#">

                                            <i class="fa-solid fa-gear"></i>   Settings
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="#">

                                            <i class="fa-solid fa-chalkboard-user"></i>    Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Dashboard</h1>
                            <div class="btn-toolbar mb-2 mb-md-0">
                                <div class="btn-group me-2">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg class="bi me-1" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                                        This week
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="#">Sunday</a></li>
                                        <li><a class="dropdown-item" href="#">Monday</a></li>
                                        <li><a class="dropdown-item" href="#">Tuesday</a></li>
                                        <li><a class="dropdown-item" href="#">Wednesday</a></li>
                                        <li><a class="dropdown-item" href="#">Thursday</a></li>
                                        <li><a class="dropdown-item" href="#">Friday</a></li>
                                        <li><a class="dropdown-item" href="#">Saturday</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img class="my-4 w-100" id="myChart" width="108" height="459" src={img} alt="" />
                        <h2>Admin Dashboard</h2>
                        <div class="table-responsive small">
                            <table class="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Total Number</th>
                                        <th scope="col">Users 2022</th>
                                        <th scope="col">Users 2023</th>
                                        <th scope="col">Users 2024</th>
                                        <th scope="col">Users 2025</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>random</td>
                                        <td>data</td>
                                        <td>placeholder</td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>1,002</td>
                                        <td>placeholder</td>
                                        <td>irrelevant</td>
                                        <td>visual</td>
                                        <td>layout</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>data</td>
                                        <td>rich</td>
                                        <td>dashboard</td>
                                        <td>tabular</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>information</td>
                                        <td>placeholder</td>
                                        <td>illustrative</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,004</td>
                                        <td>text</td>
                                        <td>random</td>
                                        <td>layout</td>
                                        <td>dashboard</td>
                                    </tr>
                                    <tr>
                                        <td>1,005</td>
                                        <td>dashboard</td>
                                        <td>irrelevant</td>
                                        <td>text</td>
                                        <td>placeholder</td>
                                    </tr>
                                    <tr>
                                        <td>1,006</td>
                                        <td>dashboard</td>
                                        <td>illustrative</td>
                                        <td>rich</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,007</td>
                                        <td>placeholder</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                        <td>irrelevant</td>
                                    </tr>
                                    <tr>
                                        <td>1,008</td>
                                        <td>random</td>
                                        <td>data</td>
                                        <td>placeholder</td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>1,009</td>
                                        <td>placeholder</td>
                                        <td>irrelevant</td>
                                        <td>visual</td>
                                        <td>layout</td>
                                    </tr>
                                    <tr>
                                        <td>1,010</td>
                                        <td>data</td>
                                        <td>rich</td>
                                        <td>dashboard</td>
                                        <td>tabular</td>
                                    </tr>
                                    <tr>
                                        <td>1,011</td>
                                        <td>information</td>
                                        <td>placeholder</td>
                                        <td>illustrative</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,012</td>
                                        <td>text</td>
                                        <td>placeholder</td>
                                        <td>layout</td>
                                        <td>dashboard</td>
                                    </tr>
                                    <tr>
                                        <td>1,013</td>
                                        <td>dashboard</td>
                                        <td>irrelevant</td>
                                        <td>text</td>
                                        <td>visual</td>
                                    </tr>
                                    <tr>
                                        <td>1,014</td>
                                        <td>dashboard</td>
                                        <td>illustrative</td>
                                        <td>rich</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,015</td>
                                        <td>random</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>1,015</td>
                                        <td>random</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                        <td>text</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
