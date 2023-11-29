import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import leh_ladakh from "../images/799_20231020080014_img_20231020075946_leh-ladakh-tour-package.jpg";
import EscortedTour from "../images/756_20231014083655_img_20231014203631_ladakh-tour-packages.jpg";

export default function LadakhTour() {
  return (
    <>
    <Header/>
    <section className="container-fluid main-section">
        <div className="container px-0">
            <div className="nav_listing">
                <ul className='d-flex list-inline'>
                    <li className='px-1'> Home /</li>
                    <li className='px-1'> India Packages</li>
                    <li className='fw-bold px-1'> / Ladakh</li>
                </ul>
            </div>
            <div className="row">
                <div>
                    <h1>Ladakh Tour Packages</h1>
                    <p>Ladakh Tour Packages</p>
                </div>
            </div>
            <div className="row gy-3">
            <div className="col-lg-4 PackagesCard">
                <div className="card">
                    <img src={leh_ladakh} className="card-img-top" alt="luxury_hotels img" />
                    <div className="card-body">
                        <h3 className="card-title my-3 fw-semibold fs-5">Leh Ladakh Tour Package from Delhi with Flights</h3>
                        <div><hr /></div>
                        <div className='listing-duration'><span className='fw-medium text-dark'>7 Days</span></div>
                        <div className="pt-2">
                            <span className='text-decoration-line-through text-danger'>USD 592/-</span>
                            <span className='bg-danger text-light rounded px-2 py-1 fw-bold discount_btn'>Save 50%</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center pb-2'>
                            <div className="price fw-bold">USD 296/-</div>
                            <button className="blog_ridMore_btn text-light">View Details</button>
                         </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 PackagesCard">
                <div className="card">
                    <img src={EscortedTour} className="card-img-top" alt="luxury_hotels img" />
                    <div className="card-body">
                        <h3 className="card-title my-3 fw-semibold fs-5">Leh Ladakh Escorted Tour</h3>
                        <div><hr /></div>
                        <div className='listing-duration'><span className='fw-medium text-dark'>7 Days</span></div>
                        <div className="pt-2">
                            {/* <span className='text-decoration-line-through text-danger'>USD 592/-</span>
                            <span className='bg-danger text-light rounded px-2 py-1 fw-bold discount_btn'>Save 50%</span> */}
                        </div>
                        <div className='d-flex justify-content-between align-items-center pb-2'>
                            <div className="price fw-bold">USD 296/-</div>
                            <button className="blog_ridMore_btn text-light">View Details</button>
                         </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}
