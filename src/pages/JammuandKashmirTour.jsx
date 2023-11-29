import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function JammuandKashmirTour() {
  return (
    <>
    <Header/>
    <section className="container-fluid main-section">
        <div className="container px-0">
            <div className="nav_listing">
                <ul className='d-flex list-inline'>
                    <li className='px-1'> Home /</li>
                    <li className='px-1'> India Packages</li>
                    <li className='fw-bold px-1'> / Jammu and Kashmir</li>
                </ul>
            </div>
            <div className="row">
                <div>
                    <h1>Jammu and Kashmir Tour Packages</h1>
                    <p>Jammu and Kashmir Tour Packages</p>
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
