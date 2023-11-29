import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import PackagesCard from '../common/PackagesCard'

export default function RajasthanTour() {
  return (
    <>
    <Header/>
    <section className="container-fluid main-section">
        <div className="container px-0">
            <div className="nav_listing">
                <ul className='d-flex list-inline'>
                    <li className='px-1'> Home /</li>
                    <li className='px-1'> India Packages</li>
                    <li className='fw-bold px-1'> / Rajasthan</li>
                </ul>
            </div>
            <div className="row">
                <div>
                    <h1>Rajasthan Tour Packages</h1>
                    <p>Rajasthan Tour Packages</p>
                </div>
            </div>
            <div className="row gy-3">
                <PackagesCard/>
                <PackagesCard/>
                <PackagesCard/>
                <PackagesCard/>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}
