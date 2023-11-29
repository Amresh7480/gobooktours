import React from 'react'
import { IoChevronForward } from "react-icons/io5";
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
     {/* ------------bottom search section------------ */}
    <section className=''>
        <div className="container py-5">
          <div className="row ">
            <div className=" bottom-search d-lg-flex justify-content-lg-center">
              <input className='fs-5 p-3' type="text" placeholder='Subscribe to our Newsletter' />
              <button className='btn btn-lg btn-success btn-block ms-lg-2 mt-3 mt-lg-0' >Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    <div className="container-fluid footer text-light py-4 ">
        <div className="container">
            <div className="row border-bottom py-3">
                <div className="col-lg-3">
                    <div className='footer-menu-heading'>Corporate Information </div>
                    <ul className='list-inline'>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/'}>Home</Link></li>
                        <li><IoChevronForward/> <Link className='text-light text-decoration-none' to={'/About'}>About Us</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/Privacy'}>Privacy Policy</Link></li>
                        <li><IoChevronForward/> <Link className='text-light text-decoration-none' to={'/TermsAndConditions'}>Terms & Conditions</Link></li>
                        <li><IoChevronForward/> <Link className='text-light text-decoration-none' to={'/CancellationPolicy'}>Cancellation Policy</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/CookiePolicy'}>Cookie Policy</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none'  to={'/Blog'}>Blog</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/Contact-Us'}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <div className='footer-menu-heading'>Top Destinations </div>
                    <ul className='list-inline'>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/RajasthanTour'}> Rajasthan Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/KeralaTour'}>Kerala Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/LadakhTour'}>Ladakh Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/MadhyaPradeshTour'}>Madhya Pradesh Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/KarnatakaTour'}>Karnataka Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/JammuandKashmirTour'}>Jammu and Kashmir Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/UttarakhandTour'}>Uttarakhand Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/GujaratTour'}>Gujarat Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/TamilNaduTour'}>Tamil Nadu Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/SikkimTour'}>Sikkim Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/JaipurTour'}>Jaipur Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/VaranasiTour'}>Varanasi Tour Packages</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <div className='footer-menu-heading'>Trending Destinations </div>
                    <ul className='list-inline'>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/KathmanduTour'}>Kathmandu Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/ParoTour'}>Paro Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/MaleTour'}>Male Tour Packages</Link> </li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/RanthamboreTour'}>Ranthambore Tour Packages</Link> </li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/VaranasiTour'} >Varanasi Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/KhajurahoTour'}>Khajuraho Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/AlleppeyTour'}>Alleppey Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/DarjeelingTour'}>Darjeeling Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/BandhavgarhTour'}>Bandhavgarh Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/OotyTour'}>Ooty Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/JaipurTour'}>Jaipur Tour Packages</Link></li>
                        <li><IoChevronForward/><Link className='text-light text-decoration-none' to={'/LehTour'}>Leh Tour Packages</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <div className='footer-menu-heading'>Best Seller Tours </div>
                    <ul className='list-inline'>
                        <li><IoChevronForward/>Golden Triangle with Varanasi</li>
                        <li><IoChevronForward/>Golden Triangle with Ranthambore</li>
                        <li><IoChevronForward/>North India and South India Tour</li>
                        <li><IoChevronForward/>North India Luxury Tour</li>
                        <li><IoChevronForward/>Leh Ladakh Escorted Tour</li>
                        <li><IoChevronForward/>Asiatic Lions with Bengal Tigers</li>
                        <li><IoChevronForward/>Ultimate Tiger Safari Tour in India with Mumbai</li>
                        <li><IoChevronForward/>Taj Temples and Tigers India Tour</li>
                        <li><IoChevronForward/>Golden Triangle and Kerala Tour</li>
                    </ul>
                </div>
            </div>
              <div className='text-center pt-4 pb-0'>© 2023 Gobooktours.com. All Right Reserved</div>
        </div>
    </div>
    </>
  )
}
