import React from 'react'
import OutherPages_Header from '../common/OutherPages_Header';
import Footer from '../common/Footer';

export default function About() {
    return (
        <>
            <OutherPages_Header />
            {/* ---------------------About-Section------------------ */}
            <section className='container-fluid about-main'>
                <div className="container px-0">
                    <div className="row">
                        <div className="page-headline">
                            <h1 className='fw-bold'>About Us</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita illum est molestiae dolorum nostrum sint, rem ratione assumenda sequi blanditiis! Eveniet perspiciatis non tenetur nemo, aut atque laborum itaque pariatur?
                            </p>
                        </div>
                    </div>
                    {/* -------------------Faq---------------------- */}
                    <div className="row">
                        <div className="about-faq">
                        <div className="accordion" id="faq">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                        Can I customize my India Holiday Package?
                                    </button>
                                </h2>
                                <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faq">
                                    <div className="accordion-body">
                                        <p>Yes sure, we can customize your India holiday package as per your interest and preferences. Just contact us and share your interest with us. contact us</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                        What is the best time to visit India?
                                    </button>
                                </h2>
                                <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faq">
                                    <div className="accordion-body">
                                        <p>The best time to visit India depends on your interests and the region you want to visit. In general, the winter months (October to March) are the most popular time to visit, as the weather is mild and pleasant throughout the country. However, if you're planning to visit the Himalayas, the best time to go is during the spring (April to June) or fall (September to November), when the skies are clear and the wildflowers are in bloom.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <Footer />
        </>
    )
}
