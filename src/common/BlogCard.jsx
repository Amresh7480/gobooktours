import React from 'react'
import luxury_hotels from "../images/img_20231016230756_10-best-luxury-hotels-in-india.jpg";

export default function BlogCard() {
    return (
        <>
            <div className="col-lg-4">
                <div className="card">
                    <img src={luxury_hotels} className="card-img-top" alt="luxury_hotels img" />
                    <div className="card-body">
                        <h5 className="card-title my-3">Learn everything before visiting Ladakh in Winters</h5>
                        <div className='listin-meta'>Oct 19, 2023</div>
                        <div><hr /></div>
                        <p className="card-text">
                            learn-everything-before-visiting-ladakh-in-winters-november-to-march
                        </p>
                        <div><button className="blog_ridMore_btn text-light">Read More</button> </div>
                    </div>
                </div>
            </div>
        </>
    )
}
