import React, { useEffect } from 'react'
import { IoCall, IoChevronDownSharp } from "react-icons/io5";
import logo from '../images/gobooktours-logo.png'
import { useLocation } from 'react-router-dom';
export default function Header() {

    // let urlInfo=useLocation();
    //  useEffect(()=>{
    //    window.scrollTo(0,0)
    // })[urlInfo.pathname];

    return (
        <header className='container-fluid border-bottom border-sm-none'>
            <nav className="container navbar navbar-expand-lg">
                <a className="navbar-brand" href="#"><img src={logo} alt='website logo' width='195px' /></a>
                <button className="navbar-toggler border-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item destinations-nav">
                            <a className="nav-link " aria-current="page" href="#">Destinations<IoChevronDownSharp /> </a>
                            <div className="destinations-mega-menu">
                                <h5>All Destinations </h5>
                                <hr/>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <ul className='list-group-flush p-0'>
                                            <li>Andhra Pradesh Tours</li>
                                            <li>Andaman & Nicobar Islands</li>
                                            <li>Assam Tour Packages</li>
                                            <li>Bihar Tour Packages</li>
                                            <li>Delhi Tour Packages</li>
                                            <li>Gujarat Tour Packages</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3">
                                        <ul className='p-0'>
                                            <li> Goa Tour Packages</li>
                                            <li>Himachal Tour Packages</li>
                                            <li>Jammu and Kashmir Tours</li>
                                            <li>Karnataka Tour Packages</li>
                                            <li>Kerala Tour Packages</li>
                                            <li>Ladakh Tour Packages</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3">
                                        <ul className='p-0'>
                                            <li>Madhya Pradesh Tours</li>
                                            <li>Maharashtra Tour Packages</li>
                                            <li>Meghalaya Tour Packages</li>
                                            <li>Odisha Tour Packages</li>
                                            <li>Punjab Tour Packages</li>
                                            <li>Rajasthan Tour Packages</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3">
                                        <ul className='p-0'>
                                            <li>Sikkim Tour Packages</li>
                                            <li>Tamil Nadu Tour Packages</li>
                                            <li>Telangana Tour Packages</li>
                                            <li>Uttarakhand Tour Packages</li>
                                            <li>Uttar Pradesh Tours</li>
                                            <li>West Bengal Tour Packages</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item countries-menu-items">
                            <a className="nav-link" href="#">Countries <IoChevronDownSharp /></a>
                            <div className="countries-mega-menu">
                                <ul className='ps-0 pb-4'>
                                    <li>India Tour Packages</li>
                                    <li>Bhutan Tour Packages</li>
                                    <li>Maldives Tour Packages</li>
                                    <li>Nepal Tour Packages</li>
                                    <li>Sri Lanka Tour Packages</li>
                                    <li>Thailand Tour Packages</li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Tel: +91-9873003099"><IoCall /> +91-9873003099 </a>
                        </li>
                    </ul>
                </div>

            </nav>
                    {/* -----------------------------Mobile Menu Offcanvas--------------------- */}
            <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <a href='' class="offcanvas-title" id="staticBackdropLabel"><img src={logo} width='195px' /></a>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                <ul class="navbar-nav">
                        <li class="nav-item destinations-nav">
                            <a class="nav-link " aria-current="page" href="#">Destinations <IoChevronDownSharp /> </a>
                            <div className="destinations-mega-menu">
                                <h5>All Destinations</h5>
                                <hr/>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <ul className='list-group-flush p-0'>
                                            <li>Andhra Pradesh Tours</li>
                                            <li>Andaman & Nicobar Islands</li>
                                            <li>Assam Tour Packages</li>
                                            <li>Bihar Tour Packages</li>
                                            <li>Delhi Tour Packages</li>
                                            <li>Gujarat Tour Packages</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3">
                                        <ul className='p-0'>
                                            <li> Goa Tour Packages</li>
                                            <li>Himachal Tour Packages</li>
                                            <li>Jammu and Kashmir Tours</li>
                                            <li>Karnataka Tour Packages</li>
                                            <li>Kerala Tour Packages</li>
                                            <li>Ladakh Tour Packages</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3">
                                        <ul className='p-0'>
                                            <li>Madhya Pradesh Tours</li>
                                            <li>Maharashtra Tour Packages</li>
                                            <li>Meghalaya Tour Packages</li>
                                            <li>Odisha Tour Packages</li>
                                            <li>Punjab Tour Packages</li>
                                            <li>Rajasthan Tour Packages</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3">
                                        <ul className='p-0'>
                                            <li>Sikkim Tour Packages</li>
                                            <li>Tamil Nadu Tour Packages</li>
                                            <li>Telangana Tour Packages</li>
                                            <li>Uttarakhand Tour Packages</li>
                                            <li>Uttar Pradesh Tours</li>
                                            <li>West Bengal Tour Packages</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item countries-menu-items">
                            <a class="nav-link" href="#">Countries <IoChevronDownSharp /></a>
                            <div className="countries-mega-menu">
                                <ul className='ps-0 pb-4'>
                                    <li>India Tour Packages</li>
                                    <li>Bhutan Tour Packages</li>
                                    <li>Maldives Tour Packages</li>
                                    <li>Nepal Tour Packages</li>
                                    <li>Sri Lanka Tour Packages</li>
                                    <li>Thailand Tour Packages</li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Tel: +91-9873003099"><IoCall /> +91-9873003099 </a>
                        </li>
                    </ul>

                </div>
            </div>
        </header>
    )
}
