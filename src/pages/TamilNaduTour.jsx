import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import golden_triangle from '../images/775_20231116084150_img_20231116203422_asiatic-lions-gir-national-park.jpg'

export default function     TamilNaduTour() {
  return (
    <>
    <Header/>
    <section className="container-fluid main-section">
        <div className="container px-0">
            <div className="nav_listing">
                <ul className='d-flex list-inline'>
                    <li className='px-1'> Home /</li>
                    <li className='px-1'> India Packages</li>
                    <li className='fw-bold px-1'> / Tamil Nadu</li>
                </ul>
            </div>
            <div className="row">
                <div>
                    <h1>Tamil Nadu Tour Packages</h1>
                    <p>Tamil Nadu Tour Packages</p>
                </div>
            </div>
            <div className="row gy-3">
            </div>
        </div>
    </section>
    <hr/>
    <Footer/>
    </>
  )
}
