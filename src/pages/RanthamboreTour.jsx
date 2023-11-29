import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import golden_triangle from '../images/775_20231116084150_img_20231116203422_asiatic-lions-gir-national-park.jpg'
// import PackagesCard from '../common/PackagesCard'

export default function RanthamboreTour() {
  return (
    <>
    <Header/>
    <section className="container-fluid main-section">
        <div className="container px-0">
            <div className="nav_listing">
                <ul className='d-flex list-inline'>
                    <li className='px-1'> Home /</li>
                    <li className='px-1'> India Packages</li>
                    <li className='fw-bold px-1'> / Ranthambore National Park</li>
                </ul>
            </div>
            <div className="row">
                <div>
                    <h1>Ranthambore National Park Tour Packages</h1>
                    <p>With our carefully crafted 25+ Best Ranthambore National Park tour packages, we strive to unveil the park's hidden treasures and create lasting memories for our guests. Book or customize your Ranthambore safari tour today and embark on an unforgettable journey into the heart of the wilderness. Nestled amidst the Aravalli Hills of Rajasthan, India, Ranthambore National Park beckons adventurers and nature enthusiasts with its captivating blend of wilderness and wildlife. Renowned as one of India's premier tiger reserves, Ranthambore offers a haven for a diverse array of flora and fauna, promising an unforgettable safari experience.</p>
                </div>
            </div>
            <div className="row gy-3">
            <div className="col-lg-4 PackagesCard">
                <div className="card">
                    <img src={golden_triangle} className="card-img-top" alt="luxury_hotels img" />
                    <div className="card-body">
                        <h3 className="card-title my-3 fw-semibold fs-5">Luxury India's Golden Triangle with the Maldives</h3>
                        <div><hr /></div>
                        <div className='listing-duration'><span className='fw-medium text-dark'>6 Days</span></div>
                        <div className="pt-2">
                            {/* <span className='text-decoration-line-through text-danger'>USD 592/-</span>
                            <span className='bg-danger text-light rounded px-2 py-1 fw-bold discount_btn'>Save 50%</span> */}
                        </div>
                        <div className='d-flex justify-content-between align-items-center pb-2'>
                            <div className="price fw-bold">USD 4,000/-</div>
                            <button className="blog_ridMore_btn text-light">View Details</button>
                         </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 PackagesCard">
                <div className="card">
                    <img src={golden_triangle} className="card-img-top" alt="luxury_hotels img" />
                    <div className="card-body">
                        <h3 className="card-title my-3 fw-semibold fs-5">Luxury India's Golden Triangle with the Maldives</h3>
                        <div><hr /></div>
                        <div className='listing-duration'><span className='fw-medium text-dark'>6 Days</span></div>
                        <div className="pt-2">
                            <span className='text-decoration-line-through text-danger'>USD 592/-</span>
                            <span className='bg-danger text-light rounded px-2 py-1 fw-bold discount_btn'>Save 50%</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center pb-2'>
                            <div className="price fw-bold">USD 4,000/-</div>
                            <button className="blog_ridMore_btn text-light">View Details</button>
                         </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 PackagesCard">
                <div className="card">
                    <img src={golden_triangle} className="card-img-top" alt="luxury_hotels img" />
                    <div className="card-body">
                        <h3 className="card-title my-3 fw-semibold fs-5">Luxury India's Golden Triangle with the Maldives</h3>
                        <div><hr /></div>
                        <div className='listing-duration'><span className='fw-medium text-dark'>6 Days</span></div>
                        <div className="pt-2">
                            <span className='text-decoration-line-through text-danger'>USD 592/-</span>
                            <span className='bg-danger text-light rounded px-2 py-1 fw-bold discount_btn'>Save 50%</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center pb-2'>
                            <div className="price fw-bold">USD 4,000/-</div>
                            <button className="blog_ridMore_btn text-light">View Details</button>
                         </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    </section>
    <section className="container-fluid main-section faq-section">
        <div className="container">
            <h2 className='mb-4'>FAQ's for Ranthambore National Park</h2>
            <div className="row">
            <div class="accordion" id="faq">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button mt-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
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
    <hr/>
    <Footer/>
    </>
  )
}
