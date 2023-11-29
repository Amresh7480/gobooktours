import React from 'react'
import luxury_hotels from "../images/img_20231016230756_10-best-luxury-hotels-in-india.jpg";


export default function PackagesCard() {
  return (
    <>
       <div className="col-lg-4 PackagesCard">
                <div className="card">
                    <img src={luxury_hotels} className="card-img-top" alt="luxury_hotels img" />
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
    </>
  )
}
