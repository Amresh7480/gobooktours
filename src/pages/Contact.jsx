import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Contact() {
    return (
        <>
            <Header />
            <section className="container-fluid page-header">
                <div className="container px-0">
                    <div className="row gy-3">
                        <div className="col-lg-6">
                            <div className="contact-heading border rounded p-4">
                                <div className="form-title fs-3 fw-bold mb-2 ">Contact Us</div>
                                <p>Drop us a message in our quick contact form, and we'll be in touch at a lightning speed.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-heading border rounded p-4">
                                <div className="form-title fs-3 fw-bold mb-2 ">Contact Us</div>
                                <p className='mb-1'><strong>Phone:</strong>+91-9873003099</p>
                                <p className='mb-1'><strong> Email: </strong>info@gobooktours.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid main-section">
                <div className="container px-0">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className='p-4 border rounded'>
                                <form action="">
                                    <div className="fs-3 fw-bold mb-2">Quick Contact Form</div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <div className="form-group mb-3">
                                                <input className='form_control border' type="text" name='fName' placeholder='Enter your full name' />
                                            </div>
                                        </div>
                                        <div className="col-md-12 ">
                                            <div className="form-group mb-3">
                                                <input className='form_control border' type="email" name='email' placeholder='Enter your email' />
                                            </div>
                                        </div>
                                        <div className="col-md-12 ">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="form-group mb-3">
                                                        <select className='form_control border' name='Country_Code'>
                                                            <option>Select Country Code</option>
                                                            <option value="+61">Australia (+61)</option>
                                                            <option value="+1">Canada (+1)</option>
                                                            <option value="+33">France (+33)</option>
                                                            <option value="+49">Germany (+49)</option>
                                                            <option value="+91">India (+91)</option>
                                                            <option value="+65">Singapore (+65)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="form-group mb-3">
                                                        <input className='form_control border' type="tel" name='phone' placeholder='Enter 10 digit phone' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 ">
                                        <div className="form-group mb-3">
                                                <textarea className='form_control border' name="message" rows='6' placeholder='Please write your message here'></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12 ">
                                        <div className="form-group mb-3">
                                                <button className='blog_ridMore_btn text-light' type='submit'>Submit</button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <Footer />
        </>
    )
}
