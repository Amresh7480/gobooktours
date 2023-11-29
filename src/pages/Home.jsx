import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import erth from "../images/sustainable-environment.png"
import peace_of_mind from "../images/peace-of-mind.png"
import rajasthan_tour from "../images/rajasthan-tour-packages.jpg"
import kerla_tour from "../images/kerala-tour-packages.jpg"
import sikkim_tour from "../images/sikkim-tour-packages.jpg"
import varanasi_tour from "../images/varanasi-tour-packages.jpg"
import madyaPradesh from "../images/khajuraho-tour-packages.jpg"
import jammu from "../images/kashmir-tour-packages.jpg"
import karanataka from "../images/karnataka-tour-packages.jpg"
import northIndia from "../images/img_20231016000508_south-india-tour.jpg"
import india from "../images/india-tour-packages.jpg"
import nepal from "../images/nepal-tour-packages.jpg"
import bhutan from "../images/bhutan-tour-packages.jpg"
import maldives from "../images/maldives-tour-packages.jpg"
import sriLanka from "../images/sri-lanka-tour-packages.jpg"
import Thailand from "../images/thailand-tour-packages.jpg"
import tajTemple from "../images/img_20231016000042_India-temples-tour.jpg"
import tiger from "../images/img_20231016000841_india-tiger-tour.jpg"
import rajsthan from "../images/img_20231016001227_rajasthan-tour-packages.jpg"
import trustpilot from "../images/trustpilot.svg"
import luxury_hotels from "../images/img_20231016230756_10-best-luxury-hotels-in-india.jpg"
import golden_triangle from "../images/img_20231016224056_10-best-golden-triangle-tour-packages.webp"
import madhya_pradesh_for_tiger from "../images/img_20231016231103_top-5-national-parks-in-madhya-pradesh-for-tiger-sightings.webp"
import Slider from '../common/Sliderss';
import Sliderss from '../common/Sliderss';
import Home_Header from '../common/Header';
import Footer from '../common/Footer';

export default function Home() {
  return (
    <>
    <Home_Header/>
      <section className="container-fluid pt-4 pb-3">
        <div className="container p-0">
          <div className="row gy-4">
            <div className="col-lg-8">
              <aside className='search-bainer d-flex align-items-center justify-content-center'>
                <div className="search w-100 text-center">
                  <h1 className='text-light text-center fw-bold'>One Country, Different<br /> Cultures</h1>
                  <div className='d-flex align-items-center justify-content-center'>
                    <input type="text" placeholder="Type your favourite destinations..." /><button className='text-light fs-4'><IoSearchSharp /></button>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-lg-4">
              <aside className="right-bainer">
                <div className="overlay d-flex align-items-end p-3 text-light">
                  <div className='overlay-containt'>
                    <tag className="tagg-bt2">Tour of the Month</tag><br />
                    <a href="" className='text-light text-decoration-none'>
                      <h4 className='fs-4 my-2 fw-semibold'>India Nepal Bhutan Tour</h4>
                    </a>
                    <p>Experience 3 Countries in just 15 Days.</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="bainer-bottom d-flex align-items-center  border mt-4 rounded">
                <div >
                  <img className='' src={erth} alt="Sustainable Travel img" width="60px" height="60px" />
                </div>
                <div>
                  <h5 className='fw-bold'>Sustainable Travel</h5>
                  <p>
                    At Gobook Tours, we're dedicated to preserving nature and empowering communities through sustainable travel initiatives.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bainer-bottom d-flex align-items-center  border mt-4 rounded">
                <div >
                  <img className='' src={peace_of_mind} alt="Peace of Mind img" width="60px" height="60px" />
                </div>
                <div>
                  <h5 className='fw-bold'>Peace of Mind</h5>
                  <p>
                    Round-the-clock local assistance over Phone, WhatsApp, Email to address any travel needs or emergencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------Top Trending India Holiday------------------ */}
      <section className=" container-fluid top-trending ">
        <div className="container px-0">
          <div className="section-title fs-1 fw-bold my-4 text-lg-start text-center">Top Trending India Holiday Destinations</div>
          <div className="row gy-2">
            <div className="col-lg-3">
              <div className="rajsthan" style={{ backgroundImage: `url(${rajasthan_tour})` }}>
                <div className="trans rounded-4">
                  <div className="hs-containt">
                    <a className='text-decoration-none text-light fs-4 fw-medium' href="">Rajasthan</a><br />
                    <a className='text-decoration-none text-light' href="">View Packages</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row gy-2">
                <div className="col-lg-4">
                  <div className="bg-frem" style={{ backgroundImage: `url(${kerla_tour})` }}>
                    <div className="trans2 rounded-4">
                      <div className="hs-containt">
                        <a className='text-decoration-none text-light fs-4 fw-medium' href="">Kerala</a><br />
                        <a className='text-decoration-none text-light' href="">View Packages</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bg-frem" style={{ backgroundImage: `url(${sikkim_tour})` }}>
                    <div className="trans2 rounded-4">
                      <div className="hs-containt">
                        <a className='text-decoration-none text-light fs-4 fw-medium' href="">Sikkim</a><br />
                        <a className='text-decoration-none text-light' href="">View Packages</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bg-frem" style={{ backgroundImage: `url(${varanasi_tour})` }}>
                    <div className="trans2 rounded-4">
                      <div className="hs-containt">
                        <a className='text-decoration-none text-light fs-4 fw-medium' href="">Varanasi</a><br />
                        <a className='text-decoration-none text-light' href="">View Packages</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bg-frem" style={{ backgroundImage: `url(${madyaPradesh})` }}>
                    <div className="trans2 rounded-4">
                      <div className="hs-containt">
                        <a className='text-decoration-none text-light fs-4 fw-medium' href="">Madhya Pradesh</a><br />
                        <a className='text-decoration-none text-light' href="">View Packages</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bg-frem" style={{ backgroundImage: `url(${jammu})` }}>
                    <div className="trans2 rounded-4">
                      <div className="hs-containt">
                        <a className='text-decoration-none text-light fs-4 fw-medium' href="">Jammu and Kashmir</a><br />
                        <a className='text-decoration-none text-light' href="">View Packages</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bg-frem" style={{ backgroundImage: `url(${karanataka})` }}>
                    <div className="trans2 rounded-4">
                      <div className="hs-containt">
                        <a className='text-decoration-none text-light fs-4 fw-medium' href="">Karnataka</a><br />
                        <a className='text-decoration-none text-light' href="">View Packages</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------Top Trending International Holiday ------------------ */}
      <section className="container-fluid top-trending top-trending-inte">
        <div className="container px-0">
          <div className="section-title fs-1 fw-bold my-4 text-lg-start text-center">
          Top Trending International Holiday Destinations
          </div>
          <div className="row gy-2">
            <div className="col-lg-4">
              <div className="bg-frem" style={{ backgroundImage: `url(${india})` }}>
                <div className="trans2 rounded-4">
                  <div className="hs-containt">
                    <a className='text-decoration-none text-light fs-4 fw-medium' href="">India</a><br />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-frem" style={{ backgroundImage: `url(${nepal})` }}>
                <div className="trans2 rounded-4">
                  <div className="hs-containt">
                    <a className='text-decoration-none text-light fs-4 fw-medium' href="">Nepal</a><br />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-frem" style={{ backgroundImage: `url(${bhutan})` }}>
                <div className="trans2 rounded-4">
                  <div className="hs-containt">
                    <a className='text-decoration-none text-light fs-4 fw-medium' href="">Bhutan</a><br />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-frem" style={{ backgroundImage: `url(${maldives})` }}>
                <div className="trans2 rounded-4">
                  <div className="hs-containt">
                    <a className='text-decoration-none text-light fs-4 fw-medium' href="">Maldives</a><br />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-frem" style={{ backgroundImage: `url(${sriLanka})` }}>
                <div className="trans2 rounded-4">
                  <div className="hs-containt">
                    <a className='text-decoration-none text-light fs-4 fw-medium' href="">Sri Lanka</a><br />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-frem" style={{ backgroundImage: `url(${Thailand})` }}>
                <div className="trans2 rounded-4">
                  <div className="hs-containt">
                    <a className='text-decoration-none text-light fs-4 fw-medium' href="">Thailand</a><br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------Top Picks Section ------------------ */}
      <section className="top-picks container-fluid">
        <div className="container px-0">
          <div className="section-title fs-1 fw-bold text-lg-start text-center">
            Top Picks For You
          </div>
          <div className="row gy-3">
            <div className="col-lg-3">
              <div class="card" >
                <img src={tajTemple} alt='tajTemple img' class="card-img-top" />
                <div class="card-body">
                  <p class="card-text border-bottom mb-0 pb-2 ">Taj Temples and Tigers India Tour</p>
                  <div className="card-body-inner d-flex justify-content-between align-items-center pb-2 pt-4">
                    <div> 11 Days</div>
                    <button className='text-light border-0 rounded'>View Details</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="card" >
                <img src={northIndia} alt='northIndia img' class="card-img-top" />
                <div class="card-body">
                  <p class="card-text border-bottom mb-0 pb-2 ">North India and South India Tour</p>
                  <div className="card-body-inner d-flex justify-content-between align-items-center pb-2 pt-4">
                    <div> 12 Days</div>
                    <button className='text-light border-0 rounded'>View Details</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="card" >
                <img src={tiger} alt='tiger img' class="card-img-top" />
                <div class="card-body">
                  <p class="card-text border-bottom mb-0 pb-2 ">Ultimate Tiger Safari Tour in India with Mumbai</p>
                  <div className="card-body-inner d-flex justify-content-between align-items-center pb-2 pt-4">
                    <div> 10 Days</div>
                    <button className='text-light border-0 rounded'>View Details</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="card" >
                <img src={rajsthan} alt='rajsthan img' class="card-img-top" />
                <div class="card-body">
                  <p class="card-text border-bottom mb-0 pb-2 ">Rajasthan Tour with Agra and Varanasi</p>
                  <div className="card-body-inner d-flex justify-content-between align-items-center pb-2 pt-4">
                    <div> 14 Days</div>
                    <button className='text-light border-0 rounded'>View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------Our Best Sellers--------------- */}
      <section className="container-fluid best-sells">
        <div className="container px-0">
          <div className="section-title fs-1 fw-bold text-lg-start text-center">
            Our Best Sellers
          </div>
          <div className='row gy-3'>
           <Sliderss/>
           </div>
        </div>
      </section>
      {/* -----------------our reviews ---------------------- */}
      <section className="our-reviews container-fluid py-3">
        <div className="container">
          <div className="row align-items-center">
            <p className='text-light text-center'>
              <span className='pe-2'> Check our reviews on</span>
              <img src={trustpilot} alt="trustpilot img" width="15%" height="47" />
            </p>
          </div>
        </div>
      </section>
      {/* -----------------our latest blog ---------------- */}
      <section className="letest-blog container-fluid py-5">
        <div className="container px-0">
          <div className="row">
            <h4>Check our latest blog posts!</h4>
            <p>Our latest blog post. <a className=' text-dark fw-bold' href="">Read all articles </a> </p>
          </div>
          <div className="row gy-3">
            <div className="col-lg-4">
              <div class="card">
                <img src={luxury_hotels} class="card-img-top" alt="luxury_hotels img" />
                <div class="card-body">
                  <h5 class="card-title fs-4 my-3">10 Best Luxury Hotels in India</h5>
                  <p class="card-text pb-3">In this post, we'll explore the 10 best luxury hotels in India that are sure to provide you with an unforgettable stay.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card">
                <img src={golden_triangle} class="card-img-top" alt="golden_triangle img" />
                <div class="card-body">
                  <h5 class="card-title fs-4 my-3">10 Best Golden Triangle Tour Packages  </h5>
                  <p class="card-text pb-3">One of the most popular tourist circuits "the Golden Triangle", covers three most vibrant cities in the India - Delhi, Agra, and Jaipur.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card">
                <img src={madhya_pradesh_for_tiger} class="card-img-top" alt="madhya_pradesh_for_tiger img" />
                <div class="card-body">
                  <h5 class="card-title fs-4 my-3">Top 5 national parks in Madhya Pradesh for tiger sightings</h5>
                  <p class="card-text pb-3">Madhya Pradesh is often referred to as the "Tiger State of India", thanks to its large and thriving population of tigers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------- FAQ section----------------------- */}
      <section className="faq-section container-fluid py-5">
        <div className="container px-0">
          <h4>Frequently Asked Questions (FAQ's)</h4>
          <div className="row">
            <div class="accordion" id="faq">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                    Can I customize my India Holiday Package?
                  </button>
                </h2>
                <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#faq">
                  <div class="accordion-body">
                    <p>Yes sure, we can customize your India holiday package as per your interest and preferences. Just contact us and share your interest with us. contact us</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                    What is the best time to visit India?
                  </button>
                </h2>
                <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#faq">
                  <div class="accordion-body">
                    <p>The best time to visit India depends on your interests and the region you want to visit. In general, the winter months (October to March) are the most popular time to visit, as the weather is mild and pleasant throughout the country. However, if you're planning to visit the Himalayas, the best time to go is during the spring (April to June) or fall (September to November), when the skies are clear and the wildflowers are in bloom.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                    What are the visa requirements for India?
                  </button>
                </h2>
                <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#faq">
                  <div class="accordion-body">
                    <p>Most foreign nationals require a visa to enter India. You can apply for an e-Visa online or a regular visa at an Indian embassy or consulate. The requirements for each type of visa vary, so it's important to check the latest information before you apply.</p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                    What is the currency of India?
                  </button>
                </h2>
                <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#faq">
                  <div class="accordion-body">
                    <p>The currency of India is the Indian rupee (INR). You can exchange your currency at banks, currency exchange bureaus, and hotels. It's a good idea to have some cash on hand, as not all places accept credit cards.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                    What are the major languages spoken in India?
                  </button>
                </h2>
                <div id="collapse5" class="accordion-collapse collapse" data-bs-parent="#faq">
                  <div class="accordion-body">
                    <p>Hindi is the official language of India, but there are over 20 other officially recognized languages spoken in the country. English is widely spoken in major cities and tourist areas.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                    What is the climate like in India?
                  </button>
                </h2>
                <div id="collapse6" class="accordion-collapse collapse" data-bs-parent="#faq">
                  <div class="accordion-body">
                    <p>India has a diverse climate, with tropical regions in the south and cold deserts in the north. The summer months (April to June) can be very hot, especially in the north. The winter months (October to March) are mild and pleasant, with the exception of the Himalayas, which can be very cold.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                    What is the food like in India?
                  </button>
                </h2>
                <div id="collapse7" class="accordion-collapse collapse" data-bs-parent="#faq">
                  <div class="accordion-body">
                    <p>Indian food is known for its rich flavors and spices. Some of the most popular Indian dishes include curry, biryani, naan bread, and tandoori chicken. India also has a wide variety of vegetarian and vegan options.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                    What are the cultural customs in India?
                  </button>
                </h2>
                <div id="collapse8" class="accordion-collapse collapse" data-bs-parent="#faq">
                  <div class="accordion-body">
                    <p>India is a very diverse country with a rich culture. It's important to be respectful of Indian customs and traditions. For example, it's considered rude to show your feet or shoulders in public. It's also important to dress modestly when visiting temples and other religious sites.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                    What are some of the must-see places in India?
                  </button>
                </h2>
                <div id="collapse9" class="accordion-collapse collapse" data-bs-parent="#faq">
                  <div class="accordion-body">
                    <p>Some of the most popular tourist destinations in India include the Taj Mahal in Agra, the Golden Temple in Amritsar, the Hawa Mahal in Jaipur, and the beaches of Goa. However, India has much more to offer than just these popular tourist spots. There are also many hidden gems to be discovered, such as the backwaters of Kerala, the hill stations of Darjeeling and Munnar, and the ancient temples of Hampi. Please feel free to contact us for more details.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
      <hr />
      <Footer/>
    </>
  )
}
