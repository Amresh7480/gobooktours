import React, { useEffect, useState } from 'react'
import { IoCall, IoChevronDownSharp } from "react-icons/io5";
import logo from '../images/gobooktours-logo.png'
import { IoSearchSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useLocation } from 'react-router-dom';
export default function OutherPages_Header() {
    let [addClassUl, setaddClassUl] = useState(false)
    // let urlInfo=useLocation();
    //  useEffect(()=>{
    //    window.scrollTo(0,0)
    // })[urlInfo.pathname];

    function showMenu() {
        setaddClassUl(!addClassUl)
    }

    return (
        <header className='container-fluid border-bottom border-sm-none outher_header'>
            <nav className='container d-flex justify-content-between align-items-center'>
                <div className="logo">
                    <img src={logo} alt="Website Logo" width='195' height='31' />
                </div>
                <div className="baar_icon d-block d-lg-none fs-3" onClick={showMenu}>
                    {
                        addClassUl == false ? <FaBars /> : <AiOutlineClose />
                    }

                </div>
                <div className='d-none d-lg-flex align-lg-items-center justify-content-lg-center header_Search_main'>
                    <input type="text" placeholder="Type your favourite destinations..." /><button className='text-light fs-4'><IoSearchSharp /></button>
                </div>
                <div className="menu">
                    <ul className={addClassUl == false ? "navbar m-0 p-0 list-inline" : "navbar m-0 p-0 list-inline showMenu"}>
                        {/* <li className='nav-link drop d-lg-none d-block'>
                            <div className='d-lg-flex align-items-lg-center justify-content-lg-center header_Search_main w-100' >
                                <input type="text" placeholder="Type your favourite destinations..." /><button className='text-light fs-4'><IoSearchSharp /></button>
                            </div>
                        </li> */}
                        <li className='nav-link drop'>
                            Destinations <IoChevronDownSharp />
                            <div className="destinations-mega-menu">
                                <h5>All Destinations</h5>
                                <hr />
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
                        <li className='nav-link drop'>
                            Countries <IoChevronDownSharp />
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
                        <li className='nav-link drop'>
                            <a className='text-decoration-none' href="tel:+91-9873003099"><IoCall />  +91-9873003099 </a>

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
                                <hr />
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
