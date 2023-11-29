import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import golden_triangle from '../images/800_20231114110724_img_20231114230652_rishikesh-tour-India.jpg'

export default function UttarakhandTour() {
  return (
    <>
    <Header/>
    <section className="container-fluid main-section">
        <div className="container px-0">
            <div className="nav_listing">
                <ul className='d-flex list-inline'>
                    <li className='px-1'> Home /</li>
                    <li className='px-1'> India Packages</li>
                    <li className='fw-bold px-1'> / Uttarakhand</li>
                </ul>
            </div>
            <div className="row">
                <div>
                    <h1>Uttarakhand Tour Packages</h1>
                    <p>Uttarakhand Tour Packages</p>
                </div>
            </div>
            <div className="row gy-3">
            <div className="col-lg-4 PackagesCard">
                <div className="card">
                    <img src={golden_triangle} className="card-img-top" alt="luxury_hotels img" />
                    <div className="card-body">
                        <h3 className="card-title my-3 fw-semibold fs-5">Golden Triangle India with Rishikesh Yoga Retreat</h3>
                        <div><hr /></div>
                        <div className='listing-duration'><span className='fw-medium text-dark'>6 Days</span></div>
                        <div className="pt-2">
                            {/* <span className='text-decoration-line-through text-danger'>USD 592/-</span>
                            <span className='bg-danger text-light rounded px-2 py-1 fw-bold discount_btn'>Save 50%</span> */}
                        </div>
                        <div className='d-flex justify-content-between align-items-center pb-2'>
                            <div className="price fw-bold">Price On Request/-</div>
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
                            <div className="price fw-bold">Price On Request/-</div>
                            <button className="blog_ridMore_btn text-light">View Details</button>
                         </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    <hr/>
    <Footer/>
    </>
  )
}
