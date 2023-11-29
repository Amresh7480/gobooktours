import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import aayurweda from "../images/809_20231108092450_img_20231108092424_ayurveda-tours-India.jpg";
import kerlaTour from "../images/792_20231019090809_img_20231019090745_kerala-tour-package.jpg";
import golden_triangle from "../images/788_20231026093436_img_20231026093416_kerala-backwaters-tour-package.jpg";

export default function KeralaTour() {
  return (
    <>
    <Header/>
    <section className="container-fluid main-section">
        <div className="container px-0">
            <div className="nav_listing">
                <ul className='d-flex list-inline'>
                    <li className='px-1'> Home /</li>
                    <li className='px-1'> India Packages</li>
                    <li className='fw-bold px-1'> / Kerala</li>
                </ul>
            </div>
            <div className="row">
                <div>
                    <h1>Kerala Tour Packages</h1>
                    <p>Kerala Tour Packages</p>
                </div>
            </div>
            <div className="row gy-3">
            <div className="col-lg-4 PackagesCard">
                <div className="card">
                    <img src={aayurweda} className="card-img-top" alt="luxury_hotels img" />
                    <div className="card-body">
                        <h3 className="card-title my-3 fw-semibold fs-5">6-Day Golden Triangle Tour with Varanasi</h3>
                        <div><hr /></div>
                        <div className='listing-duration'><span className='fw-medium text-dark'>6 Days</span></div>
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
                    <img src={kerlaTour} className="card-img-top" alt="luxury_hotels img" />
                    <div className="card-body">
                        <h3 className="card-title my-3 fw-semibold fs-5">6-Day Golden Triangle Tour with Varanasi</h3>
                        <div><hr /></div>
                        <div className='listing-duration'><span className='fw-medium text-dark'>6 Days</span></div>
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
            <div className="col-lg-4 PackagesCard">
                <div className="card">
                    <img src={golden_triangle} className="card-img-top" alt="luxury_hotels img" />
                    <div className="card-body">
                        <h3 className="card-title my-3 fw-semibold fs-5">6-Day Golden Triangle Tour with Varanasi</h3>
                        <div><hr /></div>
                        <div className='listing-duration'><span className='fw-medium text-dark'>6 Days</span></div>
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
