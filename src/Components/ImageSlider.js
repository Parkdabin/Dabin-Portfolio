import React, {useState} from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaSlideshare } from 'react-icons/fa';

function ImageSlider({ slides }) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () =>{
        setCurrent(current === length-1 ? 0 : current+1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1);
    };

    if(!Array.isArray(slides) || FaSlideshare.length <= 0) {
        return null;
    }

    return (
        <section className="slider">        
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
        
            {slides.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'}
                        key={index}>
                        {index === current && (
                            <div className="proj-container">
                                {current+1}.
                                <img
                                    src={slide.image}
                                    alt="project"
                                    className="image" />
                                <span>
                                    {slide.text}<br /> <br />
                                    <a href="https://github.com/Parkdabin/Accountbook.git">
                                        Git hub
                                    </a>
                                </span>
                            </div>

                        )}

                    </div>
                )
            })}
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
        </section>
    );
}

export default ImageSlider;