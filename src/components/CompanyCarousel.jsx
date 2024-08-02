// src/components/CompanyCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sampleImages = [
  "https://images-platform.99static.com//IVB_tQrlbDfxQOUuWVPagf61UCA=/434x30:1094x690/fit-in/500x500/99designs-contests-attachments/127/127922/attachment_127922177",
  "https://dcassetcdn.com/design_img/1452577/131353/131353_7458711_1452577_ce046365_image.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-F-YQ3VTVrpQIOzTNapzOTYKLI1EqrEL0Mg&s",
  "https://images-platform.99static.com/8DtTB8sYwoqlOw95QPKs689FxgI=/180x180:1620x1620/500x500/top/smart/99designs-contests-attachments/134/134394/attachment_134394833",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ2Wgktm8RktNIpxlkaQw6XWpOdH2Olfxag&s",
  "https://images-platform.99static.com//IVB_tQrlbDfxQOUuWVPagf61UCA=/434x30:1094x690/fit-in/500x500/99designs-contests-attachments/127/127922/attachment_127922177",
  "https://dcassetcdn.com/design_img/1452577/131353/131353_7458711_1452577_ce046365_image.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-F-YQ3VTVrpQIOzTNapzOTYKLI1EqrEL0Mg&s",
  "https://images-platform.99static.com/8DtTB8sYwoqlOw95QPKs689FxgI=/180x180:1620x1620/500x500/top/smart/99designs-contests-attachments/134/134394/attachment_134394833",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ2Wgktm8RktNIpxlkaQw6XWpOdH2Olfxag&s"
];

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const CompanyCarousel = () => {
  return (
    <div className="carousel-container my-4">
      <Slider {...settings}>
        {sampleImages.map((image, index) => (
          <div key={index} className="carousel-item p-4 flex justify-center">
            <img
              src={image}
              alt={`Company ${index + 1}`}
              className="w-32 h-32 object-cover rounded-lg shadow-lg" // Adjust size if needed
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanyCarousel;
