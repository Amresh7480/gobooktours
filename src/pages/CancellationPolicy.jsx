import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function CancellationPolicy() {
    return (
        <>
            <Header />
            <section className="container-fluid privacy-main">
                <div className="container">
                    <div className="row">
                        <div className="page-headline">
                            <h1 className='fw-bold'>Cancellation Policy</h1>
                            <p>
                                <strong>Last Updated:</strong> Ocotber 16, 2023
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, odit facilis? Aliquid, dolorem qui. Sit id doloremque doloribus optio rerum nam porro cupiditate sed! Placeat doloribus sed magnam possimus nobis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <Footer />
        </>
    )
}
