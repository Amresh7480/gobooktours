import React from 'react'
import northIndia_tour from "../images/757_20231015115509_img_20231015235437_nepal-tour-packages.jpg"
import india_varanasi_tour from "../images/754_20231013112817_img_20231013232801_india-varanasi-tour-package.jpg"
import ranthambore_national from "../images/755_20231014084134_img_20231014203903_ranthambore-national-park-tour-packages.jpg"
import golden_triangle from "../images/753_20231013112239_img_20231013232215_golden-triangle-india.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

 function Sliderss() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
        <Slider {...settings}>
        <div className="col-lg-4 px-2 px-2">
              <div className="bg-frem" style={{ backgroundImage: `url(${northIndia_tour})` }}>
                <div className="trans rounded-4">
                  <button className='bg-success text-light border-0 fw-medium'>Starts USD 2200</button>
                  <div className="hs-containt">
                    <a className='text-decoration-none text-light fs-4 fw-medium' href="">North India Tour with Nepal</a><br />
                    <span className='text-secondary' href="">12 Days/11 Nights</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 px-2">
              <div className="bg-frem" style={{ backgroundImage: `url(${india_varanasi_tour})` }}>
                <div className="trans rounded-4">
                  <button className='bg-success text-light border-0 fw-medium'>Starts USD 2200</button>
                  <div className="hs-containt">
                    <a className='text-decoration-none text-light fs-4 fw-medium' href="">Golden Triangle with Varanasi</a><br />
                    <span className='text-secondary' href="">12 Days/11 Nights</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 px-2">
              <div className="bg-frem" style={{ backgroundImage: `url(${ranthambore_national})` }}>
                <div className="trans rounded-4">
                  <button className='bg-success text-light border-0 fw-medium'>Starts USD 2200</button>
                  <div className="hs-containt">
                    <a className='text-decoration-none text-light fs-4 fw-medium' href="">North India Tour with Nepal</a><br />
                    <span className='text-secondary' href="">12 Days/11 Nights</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 px-2">
              <div className="bg-frem" style={{ backgroundImage: `url(${golden_triangle})` }}>
                <div className="trans rounded-4">
                  <button className='bg-success text-light border-0 fw-medium'>Starts USD 2200</button>
                  <div className="hs-containt">
                    <a className='text-decoration-none text-light fs-4 fw-medium' href="">North India Tour with Nepal</a><br />
                    <span className='text-secondary' href="">12 Days/11 Nights</span>
                  </div>
                </div>
              </div>
            </div>
        </Slider>
     

         {/* <div className="row gy-3">
         
            <div className="col-lg-4">
              <div className="bg-frem" style={{ backgroundImage: `url(${northIndia_tour})` }}>
                <div className="trans rounded-4">
                  <button className='bg-success text-light border-0 fw-medium'>Starts USD 2200</button>
                  <div className="hs-containt">
                    <a className='text-decoration-none text-light fs-4 fw-medium' href="">North India Tour with Nepal</a><br />
                    <span className='text-secondary' href="">12 Days/11 Nights</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-frem" style={{ backgroundImage: `url(${northIndia_tour})` }}>
                <div className="trans rounded-4">
                  <button className='bg-success text-light border-0 fw-medium'>Starts USD 2200</button>
                  <div className="hs-containt">
                    <a className='text-decoration-none text-light fs-4 fw-medium' href="">North India Tour with Nepal</a><br />
                    <span className='text-secondary' href="">12 Days/11 Nights</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-frem" style={{ backgroundImage: `url(${northIndia_tour})` }}>
                <div className="trans rounded-4">
                  <button className='bg-success text-light border-0 fw-medium'>Starts USD 2200</button>
                  <div className="hs-containt">
                    <a className='text-decoration-none text-light fs-4 fw-medium' href="">North India Tour with Nepal</a><br />
                    <span className='text-secondary' href="">12 Days/11 Nights</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div> */}
    </>
  )
}
export default Sliderss
