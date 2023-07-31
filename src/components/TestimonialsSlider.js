import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import customerImage1 from "../images/customer-2.png"; // a path to your image
import customerImage2 from "../images/customer-3.png"; // a path to your image
import customerImage3 from "../images/customer-1.png"; // a path to your image

const TestimonialsSlider = () => {
  const testimonials = [
    {
      name: "John Doe",
      image: customerImage1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      image: customerImage2,
      comment:
        "Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      rating: 4,
    },
    {
      name: "Michael Johnson",
      image: customerImage3,
      comment:
        "Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`fa fa-star ${
            i <= rating ? "text-warning" : "text-muted"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="testimonials py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="display-4 font-weight-bold text-center mb-5">
              Referanslar
            </h2>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center">
                  <div className="card shadow p-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle mx-auto mb-3"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <h4 className="mb-3">{testimonial.name}</h4>
                    <p className="lead text-muted">{testimonial.comment}</p>
                    <div className="text-warning">
                      {renderRatingStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
