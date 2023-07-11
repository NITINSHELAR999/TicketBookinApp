import React, { useEffect, useState } from 'react';
import { useStateValue } from './Contextapi/StateProvider.jsx'


const ImageSlider = ({ slides }) => {
  const [{ film_data }] = useStateValue()
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  var slideato;
  useEffect(() => {
    slideato = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 3000)

    return () => clearInterval(slideato)

  });

  // buttons
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="carousel slide">


      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" onClick={prevSlide}></span>

      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" onClick={nextSlide}></span>

      </button>

      <div className="carousel-inner">

        {
          film_data.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {
                  index === current && (
                    <img src={slide.image} alt='travel image' className="d-block w-100 rounded-5 " height="650px" style={{ borderRadius: " 15px" }} />
                  )
                }
              </div>
            );
          })
        }
      </div>

    </section>
  );
};

export default ImageSlider;


