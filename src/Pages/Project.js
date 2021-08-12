import React from 'react';
import ImageSlider from '../Components/ImageSlider';
import { SliderData } from '../Components/SliderData';


function Project() {
    return (
        <>
            <div className="Container">
                <div className="Nav">
                    <span>My Project</span>
                </div>
                <div className="Content" style={{alignItems:'center'}}>
                    <ImageSlider slides={SliderData} />
                </div>
            </div>
            <div className="copyright">Copyright 2021. Dabin All Rights Resserved</div>
        </>
    );
}

export default Project;