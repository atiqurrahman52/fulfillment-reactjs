import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { brands } from '../../data/brandData';

const Brand = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 1500,
        slidesToShow: 6,
        autoplay: true,
        arrows: false,
        speed: 8000,
    
        pauseOnHover: true,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 968,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 868,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      };
    return (
        <div class="container">
          <div class="brand-logos py-10 md:py-16">

          {/* <Slider {...settings}>
            {
                brands.map((brand)) =>(
                    <div key={brand.id}>
              <img
                class="grayscale-[100%] hover:grayscale-0 w-[70px] md:w-[150px] h-6 md:h-[50px] object-contain mx-auto"
                src={brand.img}
                alt=""
              />
            </div>
                )
            }
            </Slider> */}


            <Slider {...settings}>

          {brands.map((partner) => (
            <div key={partner.id}>
              <div>
                <img
                  className="grayscale-[100%] hover:grayscale-[0%] w-[70px] lg:w-[100px]  h-[20px] lg:h-[56px]  object-contain mx-auto my-2"
                  src={partner.img}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slider> 

           
          </div>
        </div>
    );
};

export default Brand;